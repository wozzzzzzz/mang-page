import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const Subpage = () => {
    const [gender, setGender] = useState('');
    const [ageRange, setAgeRange] = useState('');
    const [residence, setResidence] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    const db = getFirestore();

    useEffect(() => {
        const storedGender = localStorage.getItem('gender');
        const storedAgeRange = localStorage.getItem('ageRange');
        const storedResidence = localStorage.getItem('residence');

        if (storedGender) {
            setGender(storedGender);
        }

        if (storedAgeRange) {
            setAgeRange(storedAgeRange);
        }

        if (storedResidence) {
            setResidence(storedResidence);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = auth.currentUser;
        if (user) {
            try {
                await addDoc(collection(db, 'users'), {
                    uid: user.uid,
                    gender,
                    ageRange,
                    residence
                });
                console.log('사용자 정보 추가 완료');

                localStorage.setItem('gender', gender);
                localStorage.setItem('ageRange', ageRange);
                localStorage.setItem('residence', residence);

                navigate('/Subpage2');
            } catch (error) {
                console.error('사용자 정보 추가 실패:', error);
            }
        } else {
            console.error('사용자 정보를 추가할 사용자를 찾을 수 없음');
        }
    };

    const backbutton = () => {
        navigate(-1);
    };
    
    const containerStyle = {
        position:'relative',
        zIndex: '1',
        backgroundColor: 'white',
        borderRadius: '0px',
        justifyContent: 'center',
        padding: '0vh 20px 8vh 20px',
        width: 'auto',   
        margin: '-1vh 0px 0px 0px',
    };

    const labelStyle = {
        marginBottom: '3.38vh',
        marginTop: '5.5vh',
        fontWeight: 'bold',
        color: '#4CAF50',
        fontSize:'6vw',
    };

    const buttonGroupStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: '5.5vh',
        gap: '6px'
    
    };

    const buttonStyle = {
        backgroundColor: '#E3F9D3',
        color: '#7BD494',
        padding: '15px 32px',
        border: 'none',
        borderRadius: '26px',
        cursor: 'pointer',
        textAlign: 'center',
        marginBottom: '10px',
        fontSize:'1.2rem',
        fontWeight:'700',
        flexGrow: '1',
        margin: '5px 0px 5px 0px'
    };

    const selectedButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#7BD494',
        color: '#fff'
    };

    const inputStyle = {
        padding: '3.38vh 0px 0px 0rem ',
        border: 'none',
        borderBottom: '3px solid #7BD494', // 하단 2px 스트로크 색상 및 스타일
        borderRadius: '3px',
        outline: 'none', 
        boxShadow: 'none',
        fontSize: '1.2rem',
        fontWeight: '600',
        width: '95%',
        color:'#7BD494'

    };

    const submitButtonStyle = {
        backgroundColor: '#48C370',
        color: 'white',
        width: '100%',  
        paddingTop:'20px',
        paddingBottom:'20px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        marginTop: '3rem',
        textAlign: 'center'
    };

    const submitButtonHoverStyle = {
        backgroundColor: '#48C370',
        
    };

    const buttonStyle60Plus = {
        ...buttonStyle,
        padding: '15px 8px',
        

    };

    return (
        <div>
           <button onClick={backbutton}
                    style={{
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: '1',
                        marginTop: '2rem',
                        border: 'none',
                        background: 'none', 
                        cursor: 'pointer', 
                        padding: '0',
                         }}>
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4604 12.3999H5.08506L11.4446 18.7594C11.5763 18.889 11.6811 19.0434 11.7528 19.2137C11.8246 19.384 11.8619 19.5668 11.8627 19.7516C11.8635 19.9365 11.8276 20.1196 11.7572 20.2905C11.6869 20.4614 11.5833 20.6166 11.4527 20.7473C11.322 20.878 11.1667 20.9815 10.9958 21.0519C10.8249 21.1222 10.6418 21.1581 10.457 21.1573C10.2722 21.1566 10.0894 21.1192 9.91906 21.0475C9.74876 20.9757 9.59434 20.8709 9.46473 20.7392L0.714731 11.9892C0.711231 11.9869 0.710064 11.9822 0.706564 11.9787C0.514628 11.7828 0.384447 11.5349 0.332181 11.2657C0.279914 10.9965 0.307866 10.7178 0.412564 10.4644C0.482564 10.2975 0.581731 10.1494 0.706564 10.021L0.714731 10.0094L9.46473 1.25937C9.7389 0.986368 10.0971 0.851036 10.4541 0.851036C10.7309 0.851049 11.0015 0.933125 11.2317 1.08689C11.4618 1.24065 11.6413 1.45919 11.7473 1.71491C11.8533 1.97062 11.8811 2.25202 11.8272 2.52354C11.7733 2.79506 11.6402 3.04451 11.4446 3.24037L5.08623 9.59987H21.4616C21.8329 9.59987 22.189 9.74737 22.4515 10.0099C22.7141 10.2725 22.8616 10.6286 22.8616 10.9999C22.8616 11.3712 22.7141 11.7273 22.4515 11.9898C22.189 12.2524 21.8329 12.3999 21.4616 12.3999" fill="white"/>
                </svg>


             </button>
            
            <div style={{
                fontSize: '7.1795vw',
                fontWeight: 800,
                lineHeight: '12.8205vw',
                color: 'white',
                display: 'flex',
                position: 'relative',
                zIndex: '1',
                marginTop: '0.8rem',
                }}>
                    
            설문에 앞서<br/>
            당신에 대해 알려주세요
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: '2.5rem',
                right:'0'
                }}>

                <svg width="100%"  viewBox="0 0 375 341" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M102.095 0H0V147.177V165.574V227.5V312.751H272.213C317.935 312.751 355 275.686 355 229.964C355 184.242 317.935 147.177 272.213 147.177H154.135C172.891 132 184.882 108.794 184.882 82.7871C184.882 37.0651 147.817 0 102.095 0Z" fill="#F1FCE9"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M100.9 177C123.45 177 141.799 193.676 141.799 214.181C141.799 234.683 123.45 251.363 100.9 251.363C96.4192 251.363 91.5708 250.913 89.9199 250.746C75.082 245.498 74.0471 242.61 74.0471 242.61C63.7144 234.899 60 222.949 60 214.181C60 193.676 78.349 177 100.9 177ZM101.167 225.522C99.9852 225.523 98.8519 225.993 98.0161 226.829C97.1802 227.664 96.7102 228.798 96.7092 229.98C96.7078 230.863 96.9683 231.726 97.4578 232.461C97.9474 233.196 98.6439 233.769 99.4593 234.108C100.275 234.446 101.172 234.536 102.038 234.364C102.904 234.192 103.7 233.768 104.325 233.144C104.949 232.519 105.375 231.724 105.547 230.858C105.719 229.992 105.631 229.095 105.293 228.279C104.955 227.463 104.382 226.766 103.648 226.276C102.914 225.786 102.05 225.525 101.167 225.525V225.522ZM101.112 194.022C97.9236 194.026 94.8674 195.294 92.6133 197.548C90.3591 199.802 89.091 202.858 89.087 206.046C89.133 206.79 89.4611 207.489 90.0045 208C90.5479 208.511 91.2656 208.795 92.0114 208.795C92.7571 208.795 93.4748 208.511 94.0182 208C94.5616 207.489 94.8897 206.79 94.9357 206.046C94.9357 202.64 97.7057 199.87 101.112 199.87C103.209 199.87 105.335 200.837 106.529 202.332C107.44 203.477 107.722 204.841 107.362 206.388C106.956 208.173 105.912 208.913 103.926 210.181C101.509 211.731 98.1891 213.854 98.1891 219.234C98.2161 219.992 98.536 220.709 99.0815 221.236C99.6269 221.762 100.355 222.056 101.113 222.056C101.871 222.056 102.6 221.762 103.145 221.236C103.691 220.709 104.011 219.992 104.038 219.234C104.038 217.134 104.919 216.487 107.087 215.104C109.206 213.746 112.106 211.891 113.062 207.697C113.816 204.425 113.121 201.227 111.098 198.684C108.808 195.81 104.982 194.022 101.112 194.022Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M142.2 253.542C142.794 253.557 143.384 253.453 143.937 253.236C144.49 253.019 144.994 252.693 145.419 252.278C145.844 251.864 146.182 251.368 146.413 250.821C146.643 250.273 146.762 249.686 146.762 249.092C146.762 248.498 146.643 247.91 146.412 247.363C146.181 246.815 145.843 246.32 145.417 245.906C144.992 245.491 144.488 245.166 143.935 244.949C143.382 244.733 142.791 244.629 142.197 244.645C141.037 244.674 139.934 245.157 139.124 245.988C138.315 246.819 137.862 247.934 137.862 249.094C137.862 250.255 138.316 251.37 139.126 252.2C139.937 253.031 141.04 253.512 142.2 253.542M156.418 253.542C157.012 253.557 157.603 253.452 158.156 253.235C158.71 253.018 159.214 252.693 159.639 252.278C160.065 251.863 160.403 251.367 160.633 250.819C160.864 250.271 160.983 249.683 160.983 249.089C160.983 248.494 160.863 247.906 160.632 247.359C160.401 246.811 160.063 246.315 159.637 245.901C159.211 245.486 158.707 245.161 158.154 244.944C157.6 244.727 157.009 244.623 156.415 244.639C155.254 244.669 154.151 245.151 153.34 245.983C152.53 246.815 152.077 247.93 152.077 249.092C152.077 250.253 152.531 251.368 153.342 252.199C154.153 253.031 155.257 253.512 156.418 253.542M170.639 253.542C171.232 253.557 171.823 253.453 172.376 253.236C172.929 253.019 173.433 252.693 173.858 252.278C174.283 251.864 174.621 251.368 174.852 250.821C175.082 250.273 175.201 249.686 175.201 249.092C175.2 248.498 175.081 247.91 174.85 247.363C174.619 246.815 174.281 246.32 173.856 245.906C173.43 245.491 172.926 245.166 172.373 244.949C171.82 244.733 171.23 244.629 170.636 244.645C169.476 244.674 168.373 245.157 167.563 245.988C166.753 246.819 166.3 247.934 166.301 249.094C166.301 250.255 166.755 251.37 167.565 252.2C168.376 253.031 169.479 253.512 170.639 253.542M156.609 221C173.486 221 187.218 233.482 187.218 248.825C187.218 255.393 184.44 264.331 176.703 270.1L177.615 279.631C177.649 279.982 177.587 280.336 177.435 280.655C177.284 280.973 177.048 281.245 176.754 281.44C176.46 281.635 176.118 281.746 175.766 281.762C175.413 281.778 175.063 281.697 174.753 281.529L164.826 276.188C163.59 276.315 159.962 276.651 156.609 276.651C139.732 276.651 126 264.169 126 248.825C126 233.482 139.732 221 156.609 221Z" fill="#E3F9D3"/>
                <path d="M240.453 181.986C224.129 197.313 210.75 227.244 202.924 247.6C197.652 261.316 194.712 276.472 197.313 290.934C199.651 303.928 204.389 320.983 213.294 340.01C240.294 340.01 320.5 340.5 375 340.5L374.279 235.767C330.75 202.492 306.359 197.191 262.884 206.298C254.283 185.069 251.126 180.557 246.569 179.776C244.33 179.392 242.109 180.431 240.453 181.986Z" fill="#7AEBA1"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M253.858 256.075C254.031 259.905 251.066 263.151 247.235 263.324C243.405 263.496 240.16 260.531 239.987 256.701C239.814 252.87 242.779 249.625 246.609 249.452C250.44 249.279 253.685 252.244 253.858 256.075ZM260.599 275.681L266.964 281.945C268.017 282.98 269.709 282.967 270.745 281.914C271.78 280.862 271.766 279.169 270.714 278.134L263.605 271.139C261.654 269.219 258.449 269.496 256.857 271.723L251.532 279.167C250.673 280.368 250.951 282.038 252.152 282.896C253.352 283.755 255.022 283.478 255.881 282.277L260.599 275.681ZM278.818 263.162C282.649 262.989 285.614 259.744 285.441 255.913C285.268 252.083 282.023 249.118 278.192 249.291C274.362 249.464 271.397 252.709 271.57 256.539C271.742 260.37 274.988 263.335 278.818 263.162Z" fill="#272525"/>
                <path d="M263.794 205.253C290.41 178.164 296.88 174.532 302.911 175.581C309.035 177.802 310.256 188.162 312.737 205.394" stroke="#272525" stroke-width="5.2435" stroke-linecap="round"/>
                </svg>

                <div style={containerStyle}>
                <form onSubmit={handleSubmit}>
                    <div style={labelStyle}>당신의 성별은 무엇인가요?</div>
                    <div style={buttonGroupStyle}>
                        <button
                            type="button"
                            style={gender === 'male' ? selectedButtonStyle : buttonStyle}
                            onClick={() => setGender('male')}
                        >
                            남성
                        </button>
                        <button
                            type="button"
                            style={gender === 'female' ? selectedButtonStyle : buttonStyle}
                            onClick={() => setGender('female')}
                        >
                            여성
                        </button>
                    </div>
                    
                    <div style={labelStyle}>당신의 연령대는 어떻게 되시나요?</div>
                    <div style={buttonGroupStyle}>
                        {['10대', '20대', '30대', '40대', '50대', '60대 이상'].map((range) => (
                                <button
                                type="button"
                                key={range}
                                style={ageRange === range ? selectedButtonStyle : (range === '60대 이상' ? buttonStyle60Plus : buttonStyle)}
                                onClick={() => setAgeRange(range)}
                            >
                                {range}
                            </button>
                        ))}
                    </div>

                    <label style={labelStyle}>
                            당신은 현재 어디에 거주중인가요?
                            <textarea
                                value={residence}
                                onChange={(e) => setResidence(e.target.value)}
                                placeholder="선물 선택 이유를 입력해주세요"
                                style={inputStyle}
                            />
                        </label>

                    <button
                        type="submit"
                        style={submitButtonStyle}
                        onMouseOver={(e) => (e.target.style.backgroundColor = submitButtonHoverStyle.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = submitButtonStyle.backgroundColor)}>
                        
                        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.54533 10.4001H21.26L13.992 3.13215C13.8414 2.98402 13.7217 2.80755 13.6397 2.61291C13.5577 2.41828 13.515 2.20933 13.5141 1.99812C13.5133 1.78691 13.5542 1.57762 13.6347 1.38232C13.7151 1.18702 13.8334 1.00958 13.9827 0.860231C14.1321 0.710882 14.3095 0.59258 14.5048 0.512151C14.7001 0.431721 14.9094 0.390755 15.1206 0.391615C15.3318 0.392475 15.5408 0.435144 15.7354 0.517162C15.9301 0.599179 16.1065 0.718921 16.2547 0.869482L26.2547 10.8695C26.2587 10.8722 26.26 10.8775 26.264 10.8815C26.4834 11.1053 26.6321 11.3887 26.6919 11.6964C26.7516 12.004 26.7197 12.3225 26.6 12.6122C26.52 12.8028 26.4067 12.9721 26.264 13.1188L26.2547 13.1322L16.2547 23.1322C15.9413 23.4442 15.532 23.5988 15.124 23.5988C14.8076 23.5988 14.4984 23.505 14.2353 23.3293C13.9723 23.1535 13.7672 22.9038 13.646 22.6115C13.5249 22.3193 13.4931 21.9977 13.5547 21.6874C13.6162 21.3771 13.7684 21.092 13.992 20.8682L21.2587 13.6002H2.544C2.11965 13.6002 1.71268 13.4316 1.41262 13.1315C1.11257 12.8315 0.943996 12.4245 0.943996 12.0001C0.943996 11.5758 1.11257 11.1688 1.41262 10.8688C1.71268 10.5687 2.11965 10.4001 2.544 10.4001" fill="white"/>
                        </svg>

                    </button>
                </form>
            </div>
            
            </div>
            
        </div>
    );
};

export default Subpage;
