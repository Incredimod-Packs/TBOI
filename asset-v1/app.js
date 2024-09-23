var app = new function() {
    this.name = "Incredisaac", 
    this.version = "1", 
    this.date = "2024", 
    this.folder = "asset-v1/", 
    this.looptime = 7111, 
    this.bpm = 135, 
    this.totalframe = 256, 
    this.nbpolo = 7, 
    this.nbloopbonus = 3, 
    this.bonusloopA = !0, 
    this.bonusendloopA = !0, 
    this.recmaxloop = 68, 
    this.recminloop = 4, 
    this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, 
    this.spritepolo = "polo-sprite.png", 
    this.spritepicto = "game-picto.png", 
    this.colBck = "#679453", 
    this.col0 = "#679453", 
    this.col1 = "#679453",  
    this.col2 = "#679453", 
    this.col3 = "#679453", 
    this.col4 = "#679453", 
    this.animearray = [{
        name: "1_lab",
        color: "ffffff",
        uniqsnd: !1
    },{
        name: "2_pipes",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "3_tom",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "4_bip",
        color: "ffffff",
        uniqsnd: !1
    },{
        name: "5_shake",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "6_shift",
        color: "ffffff",
        uniqsnd: !1
    },{
        name: "7_pc",
        color: "ffffff",
        uniqsnd: !1
    },{
        name: "8_combust",
        color: "ffffff",
        uniqsnd: !1
    },{
        name: "9_neon",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "10_cymbal",
        color: "ffffff",
        uniqsnd: !1
    },{
        name: "11_diver",
        color: "ffffff",
        uniqsnd: !1
    },{
        name: "12_blue",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "13_hope",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "14_lector",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "15_ronin",
        color: "ffffff",
        uniqsnd: !1
    },{
        name: "16_chains",
        color: "ffffff",
        uniqsnd: !1
    },{
        name: "17_keeper",
        color: "ffffff",
        uniqsnd: !1
    },{
        name: "18_intruder",
        color: "ffffff",
        uniqsnd: !1
    },{
        name: "19_real",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "21_a",
        color: "ffffff",
        uniqsnd: !1
    },{
        name: "4_png",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "22_saas",
        color: "ffffff",
        uniqsnd: !1
    }], this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};