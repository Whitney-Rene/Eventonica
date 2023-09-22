import {expect, test} from 'vitest';
import {render} from '@testing-library/react'
import App from './App';

test("Eventonica Title", () => {
    const {getByText} = render(<App/>);
    expect(getByText("Eventonica")).toBeDefined();

})

test("Eventonica Title", () => {
    const {getByText} = render(<App/>);
    expect(getByText("Please feel free to add, delete and search for events!")).toBeDefined();

})

//this test does not pass, not sure why?
test("Eventonica Title", () => {
    const {getByText} = render(<App/>);
    expect(getByText("Welcome to our Events website.  Here you can find a list of upcoming events!")).toBeDefined();

})

