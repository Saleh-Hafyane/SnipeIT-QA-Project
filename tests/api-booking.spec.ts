import { test, expect } from '@playwright/test';

test('API GET: Fetch all hotel bookings', async ({ request }) => {
  
  // Send a GET request to the API
  const response = await request.get('https://restful-booker.herokuapp.com/booking');
  
  // Check if the API is online and healthy
  expect(response.ok()).toBeTruthy();

  // Read the data in JSON format
  const bookings = await response.json();
  
  // Prove that we got a list of bookings back (it should be an array with at least 1 item)
  expect(Array.isArray(bookings)).toBeTruthy();
  expect(bookings.length).toBeGreaterThan(0);
  
  console.log('Successfully fetched', bookings.length, 'bookings.');
});


test('API POST: Create a new hotel booking', async ({ request }) => {
  // Data
  const newBooking = {
    "firstname": "Saleh",
    "lastname": "Saleh",
    "totalprice": 723,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2026-10-02",
        "checkout": "2026-10-04"
    },
    "additionalneeds": "Quiet room with a rainy weather view"
  };

  // Send a POST request with the data
  const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: newBooking
  });

  // Check if the creation was successful
  expect(response.ok()).toBeTruthy();

  // 2. Read the response
  const responseBody = await response.json();
  
  // 3. Verify the API saved the exact data
  expect(responseBody.booking.firstname).toBe("Saleh");
  expect(responseBody.booking.additionalneeds).toContain("rainy weather");
  
  console.log('Successfully created booking ID:', responseBody.bookingid);
});