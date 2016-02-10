/**
 * Created by Administrator on 2/4/2016.
 */

/**
 *
 * @param n this string recive the name of the player
 */
var Player=function(){
    var name;
    var posy;
    var posx;
    this.setName= function (n) {
        name=n;
    };
    this.setPosX= function (px) {
        posxy=px;
    };
    this.setPosY= function (py) {
        posxy=py;
    };
    this.getName= function () {
        return name;
    };
    this.getPosX= function () {
        return posx;
    };
    this.getPosY= function () {
        return posy;
    };
};