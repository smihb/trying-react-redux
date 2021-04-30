import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopAction'
class ComprarPokemons extends Component {
    render(){
        return(
            <div>
                <button className="buy-button"  onClick={()=>{
                    this.props.buy_pokemon_action(1)
                }}>Buy</button>
                <button className="return-button" onClick={()=>{
                    this.props.return_pokemon_action(1)
                }}>Return</button>
            </div>
        );
    }
}
const mapDispatchToProps = {
    buy_pokemon_action,
    return_pokemon_action
}
export default connect(null, mapDispatchToProps)(ComprarPokemons);