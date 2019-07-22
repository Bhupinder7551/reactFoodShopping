
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, Form } from 'semantic-ui-react';

export default class PaymentDetail extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            accountNumber: "",
            cvc: "",
            expiryDate: "",
            address: "",
            paymentRecipt: false
        }
        this.paymentDone = this.paymentDone.bind(this)
        this.onChange = this.onChange.bind(this)
        this.openPaymentRecipt = this.openPaymentRecipt.bind(this)
        this.closePaymentRecipt = this.closePaymentRecipt.bind(this)
    }
    paymentDone() {
        alert("thanks for shopping with us.");
        console.log("thanks for shopping with us.")
        this.openPaymentRecipt();
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    openPaymentRecipt() {
        this.setState({
            paymentRecipt: true,
        })
    }
    closePaymentRecipt() {
        this.setState({
            paymentRecipt: false,
        })
    }

    render() {
        console.log("payment method", this.state.name)
        return (
            <div>

                <Modal open={this.props.openPaymentDetail} size="small">
                    <Modal.Header>Card detail</Modal.Header>
                    <Modal.Content>
                        <Form className="ui form segment">
                            <Form.Field>
                                <label>Name on Card:</label>
                                <input type="text" name="name" placeholder='B S Sandhu' onChange={this.onChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Account Number:</label>
                                <input type="text" name="accountNumber" onChange={this.onChange} placeholder='2222-3333-4444-5555' />
                            </Form.Field>
                            <Form.Field>
                                <label>CVC:</label>
                                <input type="text" name="cvc" onChange={this.onChange} placeholder='232' />
                            </Form.Field>
                            <Form.Field>
                                <label>Expiry Date:</label>
                                <input type="date" name="expiryDate" onChange={this.onChange} placeholder='31/03/2023' />
                            </Form.Field>
                            <Form.Field>
                                <label>Address:</label>
                                <input type="text" name="address" onChange={this.onChange} placeholder='312 Mall Road' />
                            </Form.Field>

                        </Form>
                    </Modal.Content>
                    <Modal.Content>Price:${this.props.total}</Modal.Content>
                    <Modal.Actions>
                        <button className="ui secondary button" onClick={this.props.closePaymentDetail}>Cancel</button>

                        <button className="ui green button" onClick={this.paymentDone} ><i className="check icon"></i>Pay</button>
                    </Modal.Actions>


                </Modal>

                <Modal open={this.state.paymentRecipt}>
                      <Modal.Content>
                    <Modal.Header>Name :{this.state.name} </Modal.Header>

                    <Modal.Header>Address: {this.state.address} </Modal.Header>

                        <Modal.Header>Total: ${this.props.total}</Modal.Header>
                    </Modal.Content>

                    <Modal.Actions>Thanks for shopping with us</Modal.Actions>

                    <Modal.Header>
                        <button class="ui button" onClick={this.closePaymentRecipt} type="submit">Press for more shopping</button>
                    </Modal.Header>

                </Modal>
            </div>
        );
    }
}
