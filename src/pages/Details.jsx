import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

const Details = () => {
  return (
    <div>
        <Box sx={{ background: "#fafafa", p: "2rem", mt: "3rem" }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ ml: "8rem", fontSize: "2.2rem", fontWeight: "800" }}
        >
          <Link color="#6d4c41" href="/home" underline="hover">
            Home
          </Link>
          <Typography color="textPrimary" fontSize="2.2rem" fontWeight="800">
            About
          </Typography>
        </Breadcrumbs>
      </Box>

    </div>
  )
}

export default Details