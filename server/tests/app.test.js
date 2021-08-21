const { expect } = require("@jest/globals");
const request = require("supertest");
const server = require("../server");

const timezones = [
    {
        name: 'Japan',
        region: 'Asia/Tokyo',
    },
    {
        name: 'Current timezone',
        region: '',
    }
]

describe("Test the enpoint status", () => {
    test("It should be 200", async () => {
        const response = await request(server).get("/");
        expect(response.statusCode).toBe(200);
    });
});

describe("Test the enpoint type", () => {
    test("It should be application/json", async () => {
        const response = await request(server).get("/");
        expect(response.type).toBe('application/json');
    });
});

describe("Test the enpoint body", () => {
    test("It should be a json object", async () => {
        const response = await request(server).get("/");
        expect(response.body).toStrictEqual(timezones);
    });
});