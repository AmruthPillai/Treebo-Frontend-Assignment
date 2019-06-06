import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar className="justify-content-center">
        <Typography variant="h6">Treebo</Typography>
      </Toolbar>
    </AppBar>
  )
}
