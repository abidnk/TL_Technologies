import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import InputCard from './InputCard';
import axios from 'axios';

jest.mock('axios');

describe('InputCard component', () => {
  beforeEach(() => {
    axios.post.mockClear();
    axios.get.mockClear();
  });

  it('renders without crashing', () => {
    const { getByText, getByPlaceholderText } = render(<InputCard />);
    
    expect(getByText('Get in touch!')).toBeInTheDocument();
    expect(getByPlaceholderText('Name')).toBeInTheDocument();
    expect(getByPlaceholderText('phone Number')).toBeInTheDocument();
    expect(getByPlaceholderText('Email Address')).toBeInTheDocument();
    expect(getByText('Select a service')).toBeInTheDocument();
    expect(getByText('Select your country')).toBeInTheDocument();
    expect(getByPlaceholderText('Tell us what we should help with you')).toBeInTheDocument();
    expect(getByText('Lets Chat')).toBeInTheDocument();
  });

  it('submits form data correctly', async () => {
    const userData = {
      username: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      service: 'BRANDING SERVICE',
      country: 'India',
      message: 'Help me with my website',
    };

    axios.get.mockResolvedValueOnce({ data: userData });

    const { getByText, getByPlaceholderText, getByLabelText } = render(<InputCard />);
    
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    fireEvent.change(getByPlaceholderText('Name'), { target: { value: userData.username } });
    fireEvent.change(getByPlaceholderText('phone Number'), { target: { value: userData.phone } });
    fireEvent.change(getByPlaceholderText('Email Address'), { target: { value: userData.email } });
    fireEvent.change(getByLabelText('What service do you need'), { target: { value: userData.service } });
    fireEvent.change(getByLabelText('Select your country'), { target: { value: userData.country } });
    fireEvent.change(getByPlaceholderText('Tell us what we should help with you'), { target: { value: userData.message } });
    
    fireEvent.click(getByText('Lets Chat'));

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    expect(axios.post).toHaveBeenCalledWith('http://localhost:3003/feedback', userData);
  });
});
