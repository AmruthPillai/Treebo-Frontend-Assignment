import React, { Component } from 'react'
import axios from 'axios';

import { Container, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Box } from '@material-ui/core';
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
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6">{hotel.name}</Typography>
                      <Typography style={{ fontSize: 14 }} className="grey-text">
                        {hotel.locality ? hotel.locality + ', ' : ''}{hotel.city ? hotel.city : ''}
                      </Typography>

                      <Box mt={2}>
                        {hotel.price ? (
                          this.getMinimumFromObj(hotel.price) !== Infinity ? (
                            <Typography style={{ fontSize: 14 }} variant="subtitle2">
                              Starting from ₹{this.getMinimumFromObj(hotel.price)}
                            </Typography>
                          ) : (
                              <Typography className="danger-text" style={{ fontSize: 14 }} variant="subtitle2">
                                Out of Stock
                            </Typography>
                            )
                        ) : null}
                      </Box>
                    </Box>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )
            })
          }
        </Container>
      </Box>
    )
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