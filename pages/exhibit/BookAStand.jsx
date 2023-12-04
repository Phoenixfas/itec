import React, { useState, useEffect } from 'react'
import style from '../../styles/Exhibit.module.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


export default function BookAStand() {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [company_name, setCompanyName] = useState('');
    const [company_website, setCompanyWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [job_title, setJobTitle] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');

    const [error, setError] = useState('');

    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');


    const onSubmit = async(e) => {
        e.preventDefault();
        if (first_name === '' || last_name === '' || company_name === '' || company_website === '' || email === '' || job_title === '' || phone === '' || title === '' || country === '' || region === '') {
            setError('Please fill in all required fields');
        }
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    company_name,
                    company_website,
                    email,
                    job_title,
                    phone,
                    title,
                    country,
                    region
                })
            }
            window.location.href = '/exhibit/success/book';

            // const res = await fetch('https://api.afriopia.com/booth-vendor', config);
            // const data = await res.json();
            // if (res.status === 400) {
            //     setError(data.error);
            //     return;
            // }
            // if (data.capacity === 'full') {
            //     window.location.href = '/booking-full';
            // } else {
            //     // console.log(data);
            //     window.location.href = '/events';
            // }
        } catch (err) {
            console.error(err);
        }
    }

    // send a get request to the server to check if booking is full and redirect to /booking-full if it is
    useEffect(() => {
        // const checkBooking = async() => {
        //     try {
        //         const res = await fetch('https://api.afriopia.com/booth/capacity');
        //         const data = await res.json();
        //         if (data.capacity === 'full') {
        //             window.location.href = '/booking-full';
        //         }
        //     } catch (err) {
        //         console.error(err);
        //     }
        // }
        // checkBooking();
        console.log(country);
    }, [country])

    

  return (
    <div className={style.booking}>
        <div className={style.bookingForm}>
            <h1>Book A Stand</h1>
            {error && <p style={{color: "#fff", backgroundColor: "orange", padding: "10px 20px", borderRadius: "5px", transition: .3}}>{error}</p>}
            <form onSubmit={onSubmit}>
                <div className={style.formInput}>
                    <label htmlFor="first_name">First Name*</label>
                    <input type="text" name="first_name" id="first_name" placeholder='(Required)' required value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className={style.formInput}>
                    <label htmlFor="last_name">Last Name*</label>
                    <input type="text" name="last_name" id="last_name" placeholder='(Required)' required value={last_name} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className={style.formInput}>
                    <label htmlFor="company_name">Company Name*</label>
                    <input type="text" name="company_name" id="company_name" placeholder='(Required)' required value={company_name} onChange={(e) => setCompanyName(e.target.value)} />
                </div>
                <div className={style.formInput}>
                    <label htmlFor="company_website">Company Website*</label>
                    <input type="text" name="company_website" id="company_website" placeholder='(Required)' required value={company_website} onChange={(e) => setCompanyWebsite(e.target.value)} />
                </div>
                <div className={style.formInput}>
                    <label htmlFor="email">Email*</label>
                    <input type="email" name="email" id="email" placeholder='(Required)' required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={style.formInput}>
                    <label htmlFor="job_title">Job Title*</label>
                    <input type="text" name="job_title" id="job_title" placeholder='(Required)' required value={job_title} onChange={(e) => setJobTitle(e.target.value)} />
                </div>
                <div className={style.formInput}>
                    <label htmlFor="country">Country*</label>
                    <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
                </div>
                <div className={style.formInput}>
                    <label htmlFor="country">Region*</label>
                    <RegionDropdown country={country} value={region} onChange={(val) => setRegion(val)} />
                </div>
                <div className={style.formInput}>
                    <label htmlFor="phone">Phone*</label>
                    <PhoneInput type="tel" name="phone" id="phone" placeholder='(Required)' required value={phone} onChange={setPhone} />
                </div>
                <div className={style.formInput}>
                    <label htmlFor="title">Title*</label>
                    <select name="title" id="title" placeholder='(Required)' required value={title} onChange={(e) => setTitle(e.target.value)}>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                    </select>
                </div>
                <div className={style.formSubmit}>
                    <button type="submit">Book</button>
                </div>
            </form>
        </div>
    </div>
  )
}
