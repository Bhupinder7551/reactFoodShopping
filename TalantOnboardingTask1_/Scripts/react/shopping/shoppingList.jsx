import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from 'semantic-ui-react';
import Product from "../shopping/Product.jsx";
import PaymentDetail from "../shopping/PaymentDetail.jsx"
//import ShoppingCart from "../shopping/ShoppingCart.jsx"


const products = [

    {
        id: 1,
        name: "Apple",
        description: "Red apples",
        img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Apple%20Braeburn/321_100.jpg",
        price: 152
    },

    {
        id: 2,
        name: "Rambutan",
        description: "Rambutan found in rajasthan",
        img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Rambutan/128_100.jpg",
        price: 35
    },


    {
        id: 3,
        name: "Strawberry",
        description: "Strawberry is one best fruit girls like the most",
        img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Strawberry/321_100.jpg",
        price: 8
    },

    {
        id: 4,
        name: "Banana",
        description: "I need those carbs",
        img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Banana/100_100.jpg",
        price: 19
    },


    {
        id: 5,
        name: "Orange",
        description: "Orange are orange",
        img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Orange/30_100.jpg",
        price: 13
    },
    {

        id: 6,
        name: "A Redcurrant",
        description: "Redcurrant I like the most",
        img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Redcurrant/198_100.jpg",
        price: 12
    }, {

        id: 7,
        name: "Quince",
        description: "Quince",
        img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Quince/10_100.jpg",
        price: 44
    }, {

        id: 8,
        name: "Potato White",
        description: "White Potato special from india",
        img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Potato%20White/0_100.jpg",
        price: 13
    }, {

        id: 9,
        name: "Plum",
        description: "Plum",
        img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Plum/38_100.jpg",
        price: 23
    }, {

        id: 10,
        name: "Avocado",
        description: "Avocado is very healthy for health",
        img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Avocado/45_100.jpg",
        price: 60
    }, {

        id: 11,
        name: "Cactus",
        description: "Cactus is very healthy food",
        img: " https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Cactus%20fruit/16_100.jpg ",
        price: 9
    }, {

        id: 12,
        name: "Lemon",
        description: "Lemon Juice",
        img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Lemon/321_100.jpg",
        price: 3
    }, {

        id: 13,
        name: "Peach",
        description: "import from jammu kashmir",
        img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Peach%20Flat/321_100.jpg",
        price: 23
    }, {

        id: 14,
        name: "Pomegranate",
        description: "Pomegranate good for red blood cell",
        img: " https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Pomegranate/321_100.jpg",
        price: 63
    }, {

        id: 15,
        name: "Pitahaya",
        description: "Pitahaya",
        img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Pitahaya%20Red/0_100.jpg",
        price: 13
    },
];
function Footer(p) {
    return <h2>= ${p.total}</h2>
}

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            showCart: false,
            search: "",
            openPaymentDetail: false,
            cart: [
                {
                    id: 4,
                    name: "Banana",
                    description: "I need those carbs",
                    img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Banana/100_100.jpg",
                    price: 19,
                    units: 1,
                }
            ]
        };
        this.handleAddFunc = this.handleAddFunc.bind(this)
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
        this.addQuantity = this.addQuantity.bind(this)
        this.removeQuantity = this.removeQuantity.bind(this)
        this.showCart = this.showCart.bind(this)
        this.closeCart = this.closeCart.bind(this)
        this.onchange = this.onchange.bind(this)
        this.openPaymentDetail = this.openPaymentDetail.bind(this)
        this.closePaymentDetail = this.closePaymentDetail.bind(this)
    }

    onchange(e) {
        this.setState({ search: e.target.value });
    };

    //handleAddFunc(pro) {
    //    const existingProduct = this.state.cart.filter(p => p.id === pro.id);
    //    if (existingProduct.length > 0) {
    //        const withoutExistingProduct = this.state.cart.filter(p => p.id !== pro.id);
    //        const updateUnitsProducts = {
    //            existingProduct,
    //            units: existingProduct[0].units + pro.units
    //        };

    //        this.setState({
    //            cart: [...this.state.cart,
    //            ...updateUnitsProducts,]
    //        });
    //    } else {
    //        this.setState({
    //            cart: [...this.state.cart, pro]

    //        });
    //    }
    //}
    showCart() {
        this.setState({
            showCart: true,
        })
    }
    closeCart() {
        this.setState({
            showCart: false,
        })
    }
    addQuantity(id) {
        const cartDetail = this.state.cart;

        const sameID = cartDetail.find(x => x.id === id)

        const index = cartDetail.indexOf(sameID);
        const product = cartDetail[index];
        product.units = product.units + 1;



        this.setState({

            cart: [...sameID, ...this.state.cart]


        })


        console.log("cartDetails", id)


    };
    removeQuantity(id) {
        const cartDetail = [...this.state.cart];

        const sameID = cartDetail.find(x => x.id === id)

        const index = cartDetail.indexOf(sameID);
        const product = cartDetail[index];
        product.units = product.units - 1;

        if (product.count === 0) {
            this.handleRemoveFromCart(id)
        } else {
            console.log("handleRemoveFromCart is not working")
        }





        this.setState({

            cart: [...sameID, ...this.state.cart]


        })


        console.log("cartDetails", id)



    }
    //removeQuantity(pro) {
    //    const cartDetail = this.state.cart;

    //    const sameID = cartDetail.filter(x => {
    //        x.id === pro.id

    //        x.units--;
    //    });

    //    console.log("cartDetails", pro)
    //    this.setState({
    //        cart: [...this.state.cart, ...sameID]
    //    })


    //}

    handleAddFunc(pro) {
        const existingProductIndex = this.state.cart.findIndex(p => p.id === pro.id);

        if (existingProductIndex >= 0) {
            alert("its already in a shopping cart", pro)


            const cartProducts = [...this.state.cart.slice()];

            const existingProduct = cartProducts[existingProductIndex];

            const updatedUnitsProduct = {
                existingProduct,
                units: existingProduct.units + pro.units

            };

            cartProducts[existingProduct] = updatedUnitsProduct;

            this.setState({
                cart: cartProducts

            }); console.log("product added", pro.units)

        } else {
            this.setState({
                cart: [...this.state.cart, pro]
            });
        }
    }

    //handleAddFunc(pro) {
    //    const existingProductIndex = this.state.cart.findIndex(p => p.id === pro.id);

    //    if (existingProductIndex >= 0) {
    //        alert("its already in a shopping cart", pro)


    //        //const cartProducts = this.state.cart.slice();

    //        //const existingProduct = cartProducts[existingProductIndex];

    //        //const updatedUnitsProduct = {
    //        //  existingProduct,
    //        //    units: existingProduct.units + pro.units

    //        //};

    //        //cartProducts[existingProduct] = updatedUnitsProduct;

    //        //this.setState({
    //        //    cart: cartProducts

    //        //}); console.log("product added", pro.units)

    //    } else {
    //        this.setState({
    //            cart: [...this.state.cart, pro]
    //        });
    //    }
    //}

    handleRemoveFromCart(pro) {
        const cartDetail = this.state.cart.filter(x => x.id !== pro.id

        );
        this.setState({
            cart: [...cartDetail]
        })
        console.log("ddddddddeeeeeeeeeeeetttttaaaaaaaail", cartDetail);

    }
    openPaymentDetail() {
        this.setState({
            openPaymentDetail: true,
        })
    }
    closePaymentDetail() {
        this.setState({
            openPaymentDetail: false,
        })
    }

    render() {
        //get discounted data
        let discountedData = "";
        discountedData =

            products.filter(y => y.price < 10).map(x =>
                <div key={x.id} style={{ float: "left", }} class="ui card">
                    <a className=" tc">
                        <img class="br-100 h4 w4 dib ba b--black-05 pa2" src={x.img} />
                    </a>

                    <div class="content">
                        <a class="header" href="#">{x.name}</a>
                        <div class="meta">
                            <h1>${x.price}</h1>
                        </div>
                    </div>
                </div>



            )



        const { search } = this.state;
        const filteredCountries = products.filter(pro => {
            return pro.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });


        let shoppingCart = null;

        {
            shoppingCart =
                this.state.cart.map(c =>
                    <tr key={c.id}>

                        <td>
                            <h4 class="ui image header">
                                <img src={c.img} class="ui rounded image" />
                                <div class="content">
                                    {c.name}
                                    <div class="sub header">{c.description}</div>
                                </div>
                            </h4></td>
                        <td>${c.price}</td>
                        <td>{c.units}</td>
                        <td>${(c.price * c.units)}</td>
                        <td>
                            <div onClick={this.addQuantity.bind(this, c.id)} class="ui icon button" data-tooltip="add product" >
                                <i style={{ color: "green" }} class="add icon"></i>
                            </div>
                        </td>
                        <td>
                            <div onClick={this.removeQuantity.bind(this, c.id)} class="ui icon button" data-tooltip="decline product"  >
                                <i style={{ color: "red" }} class="minus icon"></i>
                            </div>
                        </td>
                        <td>
                            <button onClick={this.handleRemoveFromCart.bind(this, c)} className="ui red button"> Remove </button>
                        </td>

                    </tr>

                )

        }

        return (

            <div>



                <div data-tooltip="Shopping cart" data-position="left center" style={{ float: "right", backgroundColor: "LightYellow" }}>
                    <h1>
                        <i onClick={this.showCart} class="circular shopping cart icon"></i>
                    </h1>
                </div>
                <div style={{ marginTop: "50px" }} class="ui input focus">

                    <label style={{ color: "white" }} className="ui black label">Find Product</label>
                    <input type="text"
                        onChange={this.onchange} placeholder="Search..." />
                </div>
                {
                    this.state.showCart ?
                        <div>
                            <div class="ui center aligned icon header">
                                <h2>
                                    <i class="circular shopping cart icon"></i>
                                    Shopping Cart
                        </h2>
                            </div>
                            <div>
                                <h3 >You have <b>{this.state.cart.length}</b> products in the cart</h3>

                                <div onClick={this.closeCart} class="ui icon button" >
                                    <i style={{ color: "red" }} class="remove icon"></i>
                                </div>
                                <div className="ui center aligned flex flex-wrap">


                                    <table class="ui sixteen wide celled table">
                                        <thead>
                                            <tr><th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Amount</th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {shoppingCart}
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <button className="ui blue button">Total:</button>
                                            </td>
                                            <td>
                                                <Footer total={this.state.cart.reduce((a, c) => a + (c.price * c.units), 0)} />
                                            </td>
                                            <td>
                                                <button onClick={this.openPaymentDetail} className="ui small green button"><i class="amazon pay icon"></i></button>
                                            </td>

                                        </tbody>
                                    </table>



                                </div>
                            </div>
                        </div>
                        :
                        ""
                }
                <PaymentDetail total={this.state.cart.reduce((a, c) => a + (c.price * c.units), 0)} openPaymentDetail={this.state.openPaymentDetail} closePaymentDetail={this.closePaymentDetail} />

                <div className="pa3 pa5-ns flex flex-wrap">

                    {
                        filteredCountries.map(x =>

                            <Product key={x.id} {...x} addFunc={this.handleAddFunc.bind(this)} />)
                    }

                </div>
                <div class="hero">
                    <div class="hero-inner">
                        <div class="hero-title">
                            <h1 class="text-light title font-2">Bhupinder Singh Sandhu is the owner of this Website</h1>
                            <h3 class="text-capitalize text-light">&copy; @2019 - My Full stack web developer Project</h3>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "100px", marginBottom: "100px" }} class="ui large images">
                    <img class="ui circular image" src="https://raw.githubusercontent.com/MuhammedBuyukkinaci/Fruit-Detector/master/images/trial2.jpg" />
                    <img class="ui circular image" src="https://raw.githubusercontent.com/yc930401/fruits_classification/master/test_images/fruit%2Btangerine/ActiOn_6.jpg" />
                    <img class="ui circular image" src="https://raw.githubusercontent.com/yc930401/fruits_classification/master/test_images/fruit%2Bgrapefruit/ActiOn_1.jpg" />
                </div>

                <div style={{ marginTop: "200px" }}>
                    <h1>Discounted products</h1>


                    {discountedData}

                </div>
                <div style={{ marginTop: "600px" }} class="footer">



                    <div class="ui  vertical footer segment">
                        <div class="ui center aligned conta1iner">
                            <div class="ui stackable grid">
                                <div class="three wide column">
                                    <h4 class="ui header">Community</h4>
                                    <div class="ui link list">
                                        <a class="item" href="https://www.transifex.com/organization/semantic-org/" target="_blank">Help Translate</a>
                                        <a class="item" href="https://github.com/Semantic-Org/Semantic-UI/issues" target="_blank">Submit an Issue</a>
                                        <a class="item" href="https://gitter.im/Semantic-Org/Semantic-UI" target="_blank">Join our Chat</a>
                                        <a class="item" href="/cla.html" target="_blank">CLA</a>
                                    </div>
                                </div>
                                <div class="three wide column">
                                    <h4 class="ui header">Network</h4>
                                    <div class="ui link list">
                                        <a class="item" href="https://github.com/Semantic-Org/Semantic-UI" target="_blank">GitHub Repo</a>
                                        <a class="item" href="http://forums.semantic-ui.com" target="_blank">User Forums</a>
                                        <a class="item" href="http://1.semantic-ui.com">1.x Docs</a>
                                        <a class="item" href="http://legacy.semantic-ui.com">0.x Docs</a>
                                    </div>
                                </div>
                                <div class="seven wide right floated column">
                                    <h4 class="ui header">Help Preserve This Project</h4>
                                    <p> Support for the continued development of Semantic UI comes directly from the community.</p>
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                        <input type="hidden" name="cmd" value="_s-xclick" />
                                        <input type="hidden" name="hosted_button_id" value="7ZAF2Q8DBZAQL" />
                                        <button type="submit" class="ui large teal button">Donate Today</button>
                                    </form>
                                </div>
                            </div>
                            <div class="ui section divider"></div>
                            <img src="https://raw.githubusercontent.com/MuhammedBuyukkinaci/Fruit-Detector/master/images/trial2.jpg" class="ui centered mini image" />
                            <div class="ui horizontal small divided link list">
                                <a class="item" href="http://semantic-ui.mit-license.org/" target="_blank">Free & Open Source (MIT)</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div >


        )
    }
}

