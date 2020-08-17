import React from 'react'
import PropTypes from "prop-types";
import styled from 'styled-components'

const SocialNetworks = ({ NetworkData, Color }) => {

    if (Color) {
        var style = "color: " + Color + ";";
    }

    if (NetworkData) {
        var networks = NetworkData.map(function(network){
            return <li key={network.name}><a style={style} href={network.url}><i className={network.className}></i></a></li>
        });
    }

    return <div>{networks}</div>
}

SocialNetworks.propTypes = {
    /*
     * NetworkData: From resumecontent.json, an array of content about my social networks
     */
    NetworkData: PropTypes.array,
    /*
     * Color: Color of the icons 
     */
    Color: PropTypes.string,
  };


export default SocialNetworks