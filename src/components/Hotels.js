import React, { Component } from 'react'
import axios from 'axios';

import { Container, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Box, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { connect } from 'react-redux'
import { getHotels, embedPrices, getDetails } from '../actions/hotelActions';

class Hotels extends Component {
  async componentDidMount() {
    let hotels = await axios.get('http://www.mocky.io/v2/5a7f23442e00005000b56873')
    this.props.getHotels(hotels.data.data);

    let prices = await axios.get('http://www.mocky.io/v2/5a7f24f02e00005200b56875')
    this.props.embedPrices(prices.data.data);

    let details = await axios.get('http://www.mocky.io/v2/5a7f265b2e00005d00b56877')
    this.props.getDetails(details.data.data)
  }

  getMinimumFromObj(obj) {
    let arr = Object.values(obj).filter(n => n);
    return Math.min(...arr);
  }

  render() {
    return (
      <Box mt={5}>
        <Container>
          {
            this.props.hotelReducer.hotels.map(hotel => {
              return (
                <ExpansionPanel key={hotel.id}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}>
                    {this._buildSummary(hotel)}
                  </ExpansionPanelSummary>
                  <Divider />
                  <ExpansionPanelDetails>
                    {this._buildDetails(hotel)}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )
            })
          }
        </Container>
      </Box>
    )
  }

  _buildDetails(hotel) {
    return <Box width="60%" display="flex" flexDirection="row">
      {this._buildPriceList(hotel)}
      {this._buildPolicyList(hotel)}
      {this._buildEssentialsList(hotel)}
    </Box>;
  }

  _buildEssentialsList(hotel) {
    return <Box flexGrow="1">
      <List dense={true}>
        <Typography variant="caption">Essentials</Typography>
        {hotel.details ?
          hotel.details.essentials.map(essential => {
            return (<div key={Math.random()}>
              <ListItem>
                <ListItemText primary={essential}></ListItemText>
              </ListItem>
            </div>);
          })
          : <Typography></Typography>}
      </List>
    </Box>;
  }

  _buildPolicyList(hotel) {
    return <Box flexGrow="1">
      <List dense={true}>
        <Typography variant="caption">Policies</Typography>
        {hotel.details ?
          hotel.details.policies.map(policy => {
            return (<div key={Math.random()}>
              <ListItem>
                <ListItemText primary={policy}></ListItemText>
              </ListItem>
            </div>);
          })
          : <Typography></Typography>}
      </List>
    </Box>;
  }

  _buildPriceList(hotel) {
    return <Box flexGrow="1">
      <List dense={true}>
        <Typography variant="caption">Room Prices</Typography>
        {hotel.price ?
          Object.keys(hotel.price).map(key => {
            return (<div key={Math.random()}>
              <ListItem button>
                <ListItemText primary={key.charAt(0).toUpperCase() + key.slice(1)} secondary={hotel.price[key] ? ('₹' + hotel.price[key]) : 'Out of Stock'}></ListItemText>
              </ListItem>
            </div>);
          })
          : <Typography></Typography>}
      </List>
    </Box>;
  }

  _buildSummary(hotel) {
    return <Box display="flex" flexDirection="column">
      <Typography variant="h6">{hotel.name}</Typography>
      <Typography style={{ fontSize: 14 }} className="grey-text">
        {hotel.locality ? hotel.locality + ', ' : ''}{hotel.city ? hotel.city : ''}
      </Typography>

      <Box mt={2}>
        {hotel.price ? (this.getMinimumFromObj(hotel.price) !== Infinity ? (<Typography style={{ fontSize: 14 }} variant="subtitle2">
          Starting from ₹{this.getMinimumFromObj(hotel.price)}
        </Typography>) : (<Typography className="danger-text" style={{ fontSize: 14 }} variant="subtitle2">
          Out of Stock
        </Typography>)) : null}
      </Box>
    </Box>;
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  getHotels: (payload) => dispatch(getHotels(payload)),
  embedPrices: (payload) => dispatch(embedPrices(payload)),
  getDetails: (payload) => dispatch(getDetails(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Hotels)