import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs, updateDoc, doc, setDoc } from 'firebase/firestore';
import RatingDescription from './components/RatingDescription.js'; 

const Subpage3 = () => {
    const [answers, setAnswers] = useState({
        GiftSelectionReason: '',
        SatisfactionLevel: '',
        GiftSatisfaction: '',  
        FoodExperienceQuestion: '',  
    });
    const navigate = useNavigate();
    const auth = getAuth();
    const db = getFirestore();

    useEffect(() => {
        const storedAnswers = JSON.parse(localStorage.getItem('answers'));

        if (storedAnswers) {
            setAnswers(storedAnswers);
        }
    }, []);

    const handleChange = (name, value) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = auth.currentUser;
        if (user) {
            try {
                const q = query(collection(db, 'users'), where('uid', '==', user.uid));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const userDoc = querySnapshot.docs[0];
                    const userDocRef = doc(db, 'users', userDoc.id);
                    await setDoc(userDocRef, {
                        ...userDoc.data(),
                        answers: {
                            ...userDoc.data().answers,
                            ...answers
                        }
                    }, { merge: true });
                    console.log('답변이 성공적으로 저장되었습니다');

                    if (answers.FoodExperienceQuestion === '예') {
                        navigate('/Subpage4'); // Navigate to Subpage3 for 선물용
                    } else if (answers.FoodExperienceQuestion === '아니오') {
                        navigate('/Subpage6'); // Navigate to Subpage4 for 섭취용
                    }

                } else {
                    console.error('해당 UID를 가진 사용자를 찾을 수 없습니다');
                }
            } catch (error) {
                console.error('답변 저장 실패:', error);
            }
        } else {
            console.error('답변을 저장할 사용자를 찾을 수 없습니다');
        }
    };

    const backbutton = () => {
        navigate(-1);
    };

    const containerStyle = {
        position: 'relative',
        zIndex: '1',
        backgroundColor: 'white',
        borderRadius: '16px',
        justifyContent: 'center',
        padding: '5.5vh 20px 8vh 20px',
        width: 'auto',
        margin: '-9vh 0px 0px 0px',
    };

    const labelStyle = {
        marginBottom: '3.38vh',
        marginTop: '5.5vh',
        fontWeight: 'bold',
        color: '#4CAF50',
        fontSize: '6vw',
    };

    const buttonStyle = {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        backgroundColor: '#E3F9D3',
        color: '#7BD494',
        padding: '24px 0px',
        border: 'none',
        borderRadius: '36px',
        cursor: 'pointer',
        textAlign: 'center',
        marginBottom: '10px',
        fontSize: '1.5rem',
        fontWeight: '700',
        flexGrow: '1',
        margin: '2rem 0px 5px 0px',
        gap: '6px'
    };

    const buttonStyle2 = {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        backgroundColor: '#E3F9D3',
        color: '#7BD494',
        padding: '16px 0px',
        border: 'none',
        borderRadius: '36px',
        cursor: 'pointer',
        textAlign: 'center',
        marginBottom: '10px',
        fontSize: '1.2rem',
        fontWeight: '700',
        flexGrow: '1',
        margin: '2rem 0px 5px 0px',
        gap: '6px'
    };

    const buttonGroupStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: '5.5vh',
        gap: '6px'
    };

    const inputStyle = {
        padding: '3.38vh 0px 0px 0rem ',
        border: 'none',
        borderBottom: '3px solid #7BD494', // 하단 2px 스트로크 색상 및 스타일
        borderRadius: '3px',
        outline: 'none', 
        boxShadow: 'none',
        fontSize: '5vw',
        fontWeight: '600',
        width: '95%',
        color:'#7BD494'
    };

    const submitButtonStyle = {
        backgroundColor: '#48C370',
        color: 'white',
        width: '100%',
        paddingTop: '20px',
        paddingBottom: '20px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        marginTop: '0rem',
        textAlign: 'center'
    };

    const submitButtonHoverStyle = {
        backgroundColor: '#48C370',
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
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.4604 12.3999H5.08506L11.4446 18.7594C11.5763 18.889 11.6811 19.0434 11.7528 19.2137C11.8246 19.384 11.8619 19.5668 11.8627 19.7516C11.8635 19.9365 11.8276 20.1196 11.7572 20.2905C11.6869 20.4614 11.5833 20.6166 11.4527 20.7473C11.322 20.878 11.1667 20.9815 10.9958 21.0519C10.8249 21.1222 10.6418 21.1581 10.457 21.1573C10.2722 21.1566 10.0894 21.1192 9.91906 21.0475C9.74876 20.9757 9.59434 20.8709 9.46473 20.7392L0.714731 11.9892C0.711231 11.9869 0.710064 11.9822 0.706564 11.9787C0.514628 11.7828 0.384447 11.5349 0.332181 11.2657C0.279914 10.9965 0.307866 10.7178 0.412564 10.4644C0.482564 10.2975 0.581731 10.1494 0.706564 10.021L0.714731 10.0094L9.46473 1.25937C9.7389 0.986368 10.0971 0.851036 10.4541 0.851036C10.7309 0.851049 11.0015 0.933125 11.2317 1.08689C11.4618 1.24065 11.6413 1.45919 11.7473 1.71491C11.8533 1.97062 11.8811 2.25202 11.8272 2.52354C11.7733 2.79506 11.6402 3.04451 11.4446 3.24037L5.08623 9.59987H21.4616C21.8329 9.59987 22.189 9.74737 22.4515 10.0099C22.7141 10.2725 22.8616 10.6286 22.8616 10.9999C22.8616 11.3712 22.7141 11.7273 22.4515 11.9898C22.189 12.2524 21.8329 12.3999 21.4616 12.3999" fill="white" />
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
                망개랑을 <br />
                구매해주신 여러분께<br />
                궁금한 점이 있어요!
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: '0rem',
                right: '0'
            }}>
                <svg width="100%" viewBox="0 0 355 313" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M102.095 0H0V147.177V165.574V227.5V312.751H272.213C317.935 312.751 355 275.686 355 229.964C355 184.242 317.935 147.177 272.213 147.177H154.135C172.891 132 184.882 108.794 184.882 82.7871C184.882 37.0651 147.817 0 102.095 0Z" fill="#F1FCE9" />
                </svg>

                <div style={containerStyle}>
                    <form onSubmit={handleSubmit}>

                        <label style={labelStyle}>
                            망개랑 떡을 선물로 결정하게된<br/>
                            이유는 무엇인가요?
                            <textarea
                                value={answers.GiftSelectionReason}
                                onChange={(e) => handleChange('GiftSelectionReason', e.target.value)}
                                placeholder="선물 선택 이유를 입력해주세요"
                                style={inputStyle}
                            />
                        </label>

                        <div style={labelStyle}>
                            망개랑 떡의 전반적인 만족도를<br/>
                            평가해주세요.
                        </div>

                        <RatingDescription />

                        <div style={buttonGroupStyle}>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <button
                                type="button"
                                key={value}
                                style={{
                                    ...buttonStyle,
                                    backgroundColor: answers.SatisfactionLevel === value ? '#7BD494' : '#E3F9D3',
                                    color: answers.SatisfactionLevel === value ? 'white' : '#7BD494',
                                }}
                                onClick={() => handleChange('SatisfactionLevel', value)}>
                            {value}
                            </button>))}
                        </div>

                        <div style={labelStyle}>
                            선물로서 망개랑 떡에 대해 <br/>
                            얼마나 만족하셨나요?
                        </div>

                        <RatingDescription />

                        <div style={buttonGroupStyle}>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <button
                                type="button"
                                key={value}
                                style={{
                                    ...buttonStyle,
                                    backgroundColor: answers.GiftSatisfaction === value ? '#7BD494' : '#E3F9D3',
                                    color: answers.GiftSatisfaction === value ? 'white' : '#7BD494',
                                }}
                                onClick={() => handleChange('GiftSatisfaction', value)}>
                            {value}
                            </button>))}
                        </div>

                        <div style={labelStyle}>
                            망개랑 떡을 드신 경험이 있으십니까?
                        </div>

                        <div style={buttonGroupStyle}>
                        {['예', '아니오'].map((range) => (
                            <button
                                type="button"
                                key={range}
                                style={{
                                    ...buttonStyle2,
                                    backgroundColor: answers.FoodExperienceQuestion === range ? '#7BD494' : '#E3F9D3',
                                    color: answers.FoodExperienceQuestion === range ? 'white' : '#7BD494',
                                }}
                                onClick={() => handleChange('FoodExperienceQuestion', range)}>
                            {range}
                            </button>))}
                        </div>

                        
                        <button
                            type="submit"
                            style={submitButtonStyle}
                            onMouseOver={(e) => (e.target.style.backgroundColor = submitButtonHoverStyle.backgroundColor)}
                            onMouseOut={(e) => (e.target.style.backgroundColor = submitButtonStyle.backgroundColor)}>

                            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.54533 10.4001H21.26L13.992 3.13215C13.8414 2.98402 13.7217 2.80755 13.6397 2.61291C13.5577 2.41828 13.515 2.20933 13.5141 1.99812C13.5133 1.78691 13.5542 1.57762 13.6347 1.38232C13.7151 1.18702 13.8334 1.00958 13.9827 0.860231C14.1321 0.710882 14.3095 0.59258 14.5048 0.512151C14.7001 0.431721 14.9094 0.390755 15.1206 0.391615C15.3318 0.392475 15.5408 0.435144 15.7354 0.517162C15.9301 0.599179 16.1065 0.718921 16.2547 0.869482L26.2547 10.8695C26.2587 10.8722 26.26 10.8775 26.264 10.8815C26.4834 11.1053 26.6321 11.3887 26.6919 11.6964C26.7516 12.004 26.7197 12.3225 26.6 12.6122C26.52 12.8028 26.4067 12.9721 26.264 13.1188L26.2547 13.1322L16.2547 23.1322C15.9413 23.4442 15.532 23.5988 15.124 23.5988C14.8076 23.5988 14.4984 23.505 14.2353 23.3293C13.9723 23.1535 13.7672 22.9038 13.646 22.6115C13.5249 22.3193 13.4931 21.9977 13.5547 21.6874C13.6162 21.3771 13.7684 21.092 13.992 20.8682L21.2587 13.6002H2.544C2.11965 13.6002 1.71268 13.4316 1.41262 13.1315C1.11257 12.8315 0.943996 12.4245 0.943996 12.0001C0.943996 11.5758 1.11257 11.1688 1.41262 10.8688C1.71268 10.5687 2.11965 10.4001 2.544 10.4001" fill="white" />
                            </svg>
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subpage3;
