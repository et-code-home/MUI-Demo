import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

const AllItems = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch book data from an API
    // Replace 'api/countries' with your actual API endpoint
    fetch('http://localhost:3000/api/countries')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.countries)
        setCountries(data.countries)
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {countries && countries.map((country) => (
          <Grid key={country.id} item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">{country.geopoliticalarea}</Typography>
                < div dangerouslySetInnerHTML={{__html: country.destination_description}}></div>
                {/* <Typography color="textSecondary">{country.destination_description}</Typography> */}
                {/* Add more data to display */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllItems;
