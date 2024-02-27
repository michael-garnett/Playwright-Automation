import { test, expect } from '@playwright/test';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Cart} from '../pages/Cart';


test('Page Object Model test', async ({ page }) => {

    //Login
    const login=new Login(page);
    await login.gotoLoginPage();
    await login.login('fakeId','fakePassword')
    await page.waitForTimeout(3000)

    //Home
    const home=new Home(page)
    await home.addProductToCart("Nexus 6")
    await page.waitForTimeout(3000)
    await home.gotoCart();

    //Cart
    const cart=new Cart(page)
    await page.waitForTimeout(3000)
    const status=await cart.checkProductInCart('Nexus 6')
    expect(await status).toBe(true);
});