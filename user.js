/**
 * Created by robert on 3/12/17.
 */
function user() {
    this.username = "";
    this.walletAddress = "";
    this.balance = 0;

    this.setUsername = function (username) {
        this.username = username;
    };
    this.setWalletAddress = function (walletAddress) {
        this.walletAddress = walletAddress;
    };
    this.setBalance = function (balance) {
        this.balance = balance;
    };
}