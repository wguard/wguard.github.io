(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{477:function(s,n,t){"use strict";t.r(n);var a=t(1),r=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('func GeneratePassword(minLen int) string {\n\t// 定义密码字符集\n\tnumbers := "0123456789"\n\tletters := "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"\n\tsymbols := "~!@#$%^&*()_+{}:<>?|-=[];,./"\n\tcharset := numbers + letters + symbols\n\n\t// 随机生成数字、字母和特殊字符\n\trand.Seed(time.Now().UnixNano())\n\tnum := charset[rand.Intn(len(numbers))]\n\tletter := letters[rand.Intn(len(letters))]\n\tsymbol := symbols[rand.Intn(len(symbols))]\n\tall := []byte(charset)\n\n\tpasswordBytes := make([]byte, minLen)\n\tpasswordBytes[0] = num\n\tpasswordBytes[1] = letter\n\tpasswordBytes[2] = symbol\n\t// 随机生成其余字符并添加到字符切片中\n\tfor i := 3; i < minLen; i++ {\n\t\tpasswordBytes[i] = all[rand.Intn(len(all))]\n\t}\n\n\treturn string(passwordBytes)\n}\n\n// 生成随机密码\nfunc GetGeneratePassword(sess *session.Session) (string, error) {\n\tconfig, err := GetPasswordPolicy(sess)\n\tif err != nil {\n\t\tlogger.Error("get password policy")\n\t\treturn "", err\n\t}\n\n\tif config.HistoryCount == 0 {\n\t\treturn GeneratePassword(config.MinLen), nil\n\t}\n\n\tpasswordStr := make([]string, 10)\n\tfor i := 0; i < 10; i++ {\n\t\tpasswordStr[i] = GeneratePassword(config.MinLen)\n\t}\n\n\tdbs := GetDBSession()\n\n\tres := make([]*model.UserPasswordHistory, 0, config.HistoryCount)\n\tstmt := dbs.Select("password").\n\t\tFrom(t.UserPwdHistory).\n\t\tWhere(dbr.Eq("user_id", sess.LoginContext.UserId)).\n\t\tOrderDesc("id").\n\t\tLimit(uint64(config.HistoryCount))\n\tn, err := stmt.Load(&res)\n\tif err != nil {\n\t\treturn "", err\n\t}\n\n\tfor _, hisPwd := range res[:n] {\n\t\t// if passwordStr.\n\t\t// if strings.Compare(param.Password, hisPwd.Password) == 0 {\n\t\t// \treturn ext.ErrPasswordWeak\n\t\t// }\n\t}\n\n\treturn\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    public static void main(String[] args) {\n        String s1 = GetAllMacAddr();\n        System.out.println(s1);\n\n        String s = "ec:d6:8a:5b:97:df ec:d6:8a:5b:97:e0 ec:d6:8a:5b:97:e1 ec:d6:8a:5b:97:e2 ec:d6:8a:5b:97:e3 ec:d6:8a:5b:97:e452:54:00:c3:8e:ad";\n        String var1 = Sort(s);\n        var1 = var1.replaceAll("\\\\s*", "");\n        var1 = Md5sum(var1);\n        System.out.println(var1);\n//        "C14876C3C313E663A843612D36F0D768"\n        String ket = "F47;:9F6F646H996D;76945G69I3G:9;>>633>5<4686<>49859;7733>\\n";\n        String var2 = CaesarDecrypt(ket);\n        String[] var3 = var2.split(";");\n        System.out.println(var3[0]);\n\n        String data = "96F8;F3<D:3:6I<GI4EF:8FH9H9647HF>雾囚朂戇>633>5<467;9>49:9<9853<>";\n        String var = CaesarDecrypt(data);\n        String[] split = var.split(";");\n        System.out.println(split[0]);\n    }\t\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);