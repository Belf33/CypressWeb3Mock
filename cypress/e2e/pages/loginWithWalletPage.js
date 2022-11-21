class loginWithWalletPage {

	elements = {
		metamaskWalletConnectBlock: () => cy.get('.login__wrapper__main__body > :nth-child(1)'),
		pageHeaderText: () => cy.get('.login__wrapper__main__header h4')
	};

	clickConnectWithMetamask() {
		this.elements.metamaskWalletConnectBlock().click();
	}

	titleShouldBeEqualTo(loginWithYourWallet) {
		this.elements.pageHeaderText().contains(loginWithYourWallet);
	}
}

module.exports = new loginWithWalletPage();
