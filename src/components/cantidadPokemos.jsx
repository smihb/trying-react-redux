import React, { Component } from 'react';
import { connect } from 'react-redux'

class CantidadPokemons extends Component {
    render(){
        return(
            <div>
                Pokemon: {this.props.game_shop.pokemon}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        game_shop: state.game_shop
    }
}
export default connect(mapStateToProps)(CantidadPokemons);