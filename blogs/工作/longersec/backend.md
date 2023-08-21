```
func GeneratePassword(minLen int) string {
	// 定义密码字符集
	numbers := "0123456789"
	letters := "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	symbols := "~!@#$%^&*()_+{}:<>?|-=[];,./"
	charset := numbers + letters + symbols

	// 随机生成数字、字母和特殊字符
	rand.Seed(time.Now().UnixNano())
	num := charset[rand.Intn(len(numbers))]
	letter := letters[rand.Intn(len(letters))]
	symbol := symbols[rand.Intn(len(symbols))]
	all := []byte(charset)

	passwordBytes := make([]byte, minLen)
	passwordBytes[0] = num
	passwordBytes[1] = letter
	passwordBytes[2] = symbol
	// 随机生成其余字符并添加到字符切片中
	for i := 3; i < minLen; i++ {
		passwordBytes[i] = all[rand.Intn(len(all))]
	}

	return string(passwordBytes)
}

// 生成随机密码
func GetGeneratePassword(sess *session.Session) (string, error) {
	config, err := GetPasswordPolicy(sess)
	if err != nil {
		logger.Error("get password policy")
		return "", err
	}

	if config.HistoryCount == 0 {
		return GeneratePassword(config.MinLen), nil
	}

	passwordStr := make([]string, 10)
	for i := 0; i < 10; i++ {
		passwordStr[i] = GeneratePassword(config.MinLen)
	}

	dbs := GetDBSession()

	res := make([]*model.UserPasswordHistory, 0, config.HistoryCount)
	stmt := dbs.Select("password").
		From(t.UserPwdHistory).
		Where(dbr.Eq("user_id", sess.LoginContext.UserId)).
		OrderDesc("id").
		Limit(uint64(config.HistoryCount))
	n, err := stmt.Load(&res)
	if err != nil {
		return "", err
	}

	for _, hisPwd := range res[:n] {
		// if passwordStr.
		// if strings.Compare(param.Password, hisPwd.Password) == 0 {
		// 	return ext.ErrPasswordWeak
		// }
	}

	return
}
```

```
    public static void main(String[] args) {
        String s1 = GetAllMacAddr();
        System.out.println(s1);

        String s = "ec:d6:8a:5b:97:df ec:d6:8a:5b:97:e0 ec:d6:8a:5b:97:e1 ec:d6:8a:5b:97:e2 ec:d6:8a:5b:97:e3 ec:d6:8a:5b:97:e452:54:00:c3:8e:ad";
        String var1 = Sort(s);
        var1 = var1.replaceAll("\\s*", "");
        var1 = Md5sum(var1);
        System.out.println(var1);
//        "C14876C3C313E663A843612D36F0D768"
        String ket = "F47;:9F6F646H996D;76945G69I3G:9;>>633>5<4686<>49859;7733>\n";
        String var2 = CaesarDecrypt(ket);
        String[] var3 = var2.split(";");
        System.out.println(var3[0]);

        String data = "96F8;F3<D:3:6I<GI4EF:8FH9H9647HF>雾囚朂戇>633>5<467;9>49:9<9853<>";
        String var = CaesarDecrypt(data);
        String[] split = var.split(";");
        System.out.println(split[0]);
    }	
```

