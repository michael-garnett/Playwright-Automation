import { expect, test } from "@playwright/test";

var userid;

// Get
test('Get users', async ({ request })=>{
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

// Create
test("Create user", async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users/', {
        data: {
            email: 'michael.g@gmail.co',
            first_name: 'Michael',
            last_name: 'Gambet',
            avatar: 'https://reqres.in/img/faces/200-image.jpg'
          }, headers: {
            "Accept": "application/json"
        }
    });
    console.log(await response.json())
    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
    var res = await response.json();
    userid = res.id
})

// Update
test("Update user", async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/'+userid, {
        data: {
            email: 'michael.g@goduckgo.co',
            first_name: 'Mick',
            last_name: 'Gamdet',
            avatar: 'https://reqres.in/img/faces/4-image.jpg'
          }, headers: {
            "Accept": "application/json"
        }
    });
    console.log(await response.json())
    expect(response.status()).toBe(200);
})

// Delete
test("Delete user", async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/'+userid, {
    });
    expect(response.status()).toBe(204);
})

