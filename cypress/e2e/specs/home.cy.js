import { mock } from '@depay/web3-mock'
import { wallets } from '@depay/web3-wallets'

import assetsPage from '../pages/assetsPage';
import homePolygonAppsPage from '../pages/homePolygonAppsPage';
import loginWithWalletPage from '../pages/loginWithWalletPage';
import loginSteps from '../steps/loginSteps';

describe('Login via metamask', () => {

	let accounts = ['0xd8da6bf26964af9d7eed9e03e53415d37aa96045']

	beforeEach(() => {

		let transactionMock = mock({
			blockchain: 'ethereum',
			wallet: 'metamask',
			accounts: {return: accounts}
		})

		let mockEth = cy.window().specWindow.window.ethereum
		Cypress.on('window:before:load', win => {
		    console.log("Setting mock eth before window load: " + mockEth)
		    win.ethereum = mockEth
		});

		cy.visit('')
	})

	it.skip('Success open wallet auth page', () =>{
		homePolygonAppsPage.titleShouldBeEqualTo('Getting started with Polygon Proof of Stake chain');
	})

	it('Success opens "Login with your wallet" page when click “Polygon Bridge”', () =>{
		homePolygonAppsPage.openPolygonWalletApp();
		loginWithWalletPage.titleShouldBeEqualTo('Login with your wallet');
	})

	it('Success open "Login with your wallet" page when click “Polygon Wallet” ', () => {
		homePolygonAppsPage.openPolygonWalletApp();

		loginWithWalletPage.clickConnectWithMetamask();

		loginSteps.closeNewWalletNotificationPopupIfPresent();

		assetsPage.openUserInfoDropdown();
		assetsPage.userDropdownTitleShouldBeEqualTo('Connected with MetaMask');
	});

	it.skip('Success logout via Disconnect button', () => {
		loginSteps.loginViaMetamask();

		loginSteps.closeNewWalletNotificationPopupIfPresent();

		assetsPage.openUserInfoDropdown();
		assetsPage.clickDisconnectButton();
		assetsPage.clickYesLogoutButton();

		homePolygonAppsPage.titleShouldBeEqualTo('Getting started with Polygon Proof of Stake chain');
	})

	it.skip('Success canceling disconnection when click Cancel button', () => {
		loginSteps.loginViaMetamask();

		loginSteps.closeNewWalletNotificationPopupIfPresent();

		assetsPage.openUserInfoDropdown();
		assetsPage.clickDisconnectButton();
		assetsPage.clickCancelLogoutButton();
		assetsPage.openUserInfoDropdown();
		assetsPage.userDropdownTitleShouldBeEqualTo('Connected with MetaMask');
	})
})
