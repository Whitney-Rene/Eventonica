import React, { useRef, useState } from 'react';

export default function AddEvent (props) {
    
    const userTitle = useRef();
    const userLocation = useRef();
    const userDate = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userEvent = {title: userTitle.current?.value, location: userLocation?.current.value, eventtime: userDate?.current.value}
        
        //why didn't I need to import eventsList component?  because this is a child?
        props.submit(userEvent);
        
        userTitle.current.value='';
        userLocation.current.value='';
        userDate.current.value='';

    }

    return (

        <>
        
        <form className='form' onSubmit={handleSubmit}>
        <h2>Create an Event Below</h2>
            <label>What is the title of your event?</label>
            <input type="text" name="title" required placeholder="Title of Event" ref={userTitle}/>

            <label>What is the location of your event?</label>
            <input type="text" name="location" required placeholder="Location of Event" ref={userLocation}/>

            <label>What is the date of your event?</label>
            <input type="text" name="date" required placeholder="Date of Event" ref={userDate}/>

            <button className='createEvButt' type="submit">Submit</button>
        </form>
            {/* <button>Cancel</button> */}

        </>
    )
};

// button {
//     width: 15%; /* Button width is 50% of its containing element */
//     position: fixed; /* Set the position to fixed to make it stay in one place */
//     bottom: 20px; /* Adjust the distance from the bottom edge of the screen */
//     right: 20px; /* Adjust the distance from the right edge of the screen */
//   }