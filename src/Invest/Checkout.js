import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import coin from './img/coin.jpg';
import Spinner from "../components/Spinner";

export default class Checkout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fetchInProgress:false,
        };
    }


    onToken = token => {
        const body = {
          token: token
      };

      this.setState({
          fetchInProgress:true,
      })

      axios
          .post("http://localhost:8000/payment", body)
          .then(response => {
            console.log(response);
            alert("Payment Success");
            this.setState({
                fetchInProgress:false,
            })
          })
          .catch(error => {
            console.log("Payment Error: ", error);
            alert("Payment Error");
          });
      };


  render() {
    return (
            <React.Fragment>
                    {this.state.fetchInProgress &&  <Spinner/>}
                    <StripeCheckout
                        image={coin}
                        stripeKey="pk_test_f2y1iKFgUZui09eySMvPnydO00hjDbzReA"
                        token={this.onToken}
                        panelLabel={"Invest ₵" + this.props.amount}
                        label="Pay with  card 💳"
                      />

          </React.Fragment>
    )
  }
}
