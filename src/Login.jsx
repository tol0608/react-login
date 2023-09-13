import React, {useEffect, useState} from 'react';

const User = {
    email: 'test@gmail.com',
    pw: 'test1234@@'
}

function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false)
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    };

    const handlePw = (e) => {
        setPw(e.target.value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(pw)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    };

    const onclickConfirmButton = () => {
        if (email === User.email && pw === User.pw) {
            alert("로그인 성공!")
        } else {
            alert("등록되지 않은 회원입니다.")
        }
    }

    useEffect(() => {
        if (emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true)
    }, [emailValid, pwValid]);

    return (
        <div className="page">
            <div className="titleWrap">
                이메일과 비밀번호를
                <br/>
                입력해주세요.
            </div>
            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div className="inputWrap">
                    <input className="input" type="text" placeholder="abc@gmail.com" value={email}
                           onChange={handleEmail}/>
                </div>
                <div className="errorMessageWrap">
                    {
                        !emailValid && email.length > 0 && (
                            <div>
                                올바른 이메일을 입력해주세요.
                            </div>
                        )
                    }
                </div>

                <div className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input className="input" type="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상" value={pw}
                           onChange={handlePw}/>
                </div>
                <div className="errorMessageWrap">
                    {
                        !pwValid && pw.length > 0 && (
                            <div>
                                영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                <button onClick={onclickConfirmButton} disabled={notAllow} className="bottomButton">
                    확인
                </button>
            </div>
        </div>

    )
        ;
}

export default Login;