import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';

const Subpage2 = () => {
    const [answers, setAnswers] = useState({
        RecentPurchases: '',
        PurchasePurpose: '',
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
                    await updateDoc(userDocRef, {
                        answers
                    });
                    console.log('답변이 성공적으로 저장되었습니다');
                    if (answers.PurchasePurpose === '선물용') {
                        navigate('/Subpage3'); // Navigate to Subpage3 for 선물용
                    } else if (answers.PurchasePurpose === '섭취용') {
                        navigate('/Subpage4'); // Navigate to Subpage4 for 섭취용
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
        padding: '0vh 20px 8vh 20px',
        width: 'auto',
        margin: '-9vh 0px 0px 0px',
    };

    const buttonGroupStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: '5.5vh',
        gap: '6px'
    };

    const buttonStyle = {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        backgroundColor: '#E3F9D3',
        color: '#7BD494',
        padding: '13px 20px',
        border: 'none',
        borderRadius: '26px',
        cursor: 'pointer',
        textAlign: 'center',
        marginBottom: '10px',
        fontSize: '1.2rem',
        fontWeight: '700',
        flexGrow: '1',
        margin: '5px 0px 5px 0px',
        gap: '6px'
    };

    const selectedButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#7BD494',
        color: '#fff'
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

    const labelStyle = {
        marginBottom: '3.38vh',
        marginTop: '3vh',
        fontWeight: 'bold',
        color: '#4CAF50',
        fontSize: '6vw',
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
                        <div style={labelStyle}>
                            최근에 구매한 망개랑 제품은<br />
                            어떤 제품인가요?
                        </div>

                        <div style={buttonGroupStyle}>
                            {['망개떡세트', '망굴세트', '종합세트', '함지선물세트', '떡케이크', '기타'].map((range) => (
                                <button
                                    type="button"
                                    key={range}
                                    style={answers.RecentPurchases === range ? selectedButtonStyle : buttonStyle}
                                    onClick={() => handleChange('RecentPurchases', range)}>
                                    {range}
                                </button>))}
                        </div>

                        <div style={labelStyle}>
                            어떤 용도로 구입하셨나요?
                        </div>

                        <div style={buttonGroupStyle}>
                        {['선물용', '섭취용'].map((range) => (
                            <button
                                type="button"
                                key={range}
                                style={{
                                    ...buttonStyle,
                                    backgroundColor: answers.PurchasePurpose === range ? '#7BD494' : '#E3F9D3',
                                    color: answers.PurchasePurpose === range ? 'white' : '#7BD494',
                                }}
                                onClick={() => handleChange('PurchasePurpose', range)}>


                                            
                                {range === '선물용' ? (
                                    <svg
                                        width="40"
                                        height="45"
                                        viewBox="0 0 36 41"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M13.1394 8.26975C13.1409 6.98138 13.6534 5.74621 14.5644 4.83519C15.4754 3.92418 16.7106 3.41171 17.9989 3.41021C19.2875 3.41171 20.5228 3.92412 21.4342 4.83508C22.3455 5.74604 22.8584 6.9812 22.8604 8.26975H13.1394ZM35.9328 33.9259L32.2195 9.87633C32.1507 9.42915 31.9242 9.02134 31.5809 8.72667C31.2375 8.432 30.8001 8.26992 30.3477 8.26975H26.2706C26.2681 6.07692 25.3957 3.97464 23.845 2.42425C22.2942 0.873864 20.1918 0.00200574 17.9989 0C15.8064 0.00250715 13.7044 0.874587 12.1541 2.42492C10.6038 3.97526 9.7317 6.07724 9.72919 8.26975H5.6521C5.19966 8.26992 4.76222 8.432 4.4189 8.72667C4.07558 9.02134 3.84905 9.42915 3.78028 9.87633L0.0669416 33.9259C-0.0585428 34.7361 -0.00719024 35.5639 0.217474 36.3524C0.442137 37.1409 0.834789 37.8714 1.36847 38.4938C1.90215 39.1162 2.56421 39.6158 3.30919 39.9582C4.05417 40.3005 4.86442 40.4776 5.68431 40.4772H30.3174C31.1371 40.4773 31.9472 40.3 32.6921 39.9575C33.4369 39.615 34.0988 39.1155 34.6324 38.4932C35.166 37.8708 35.5587 37.1404 35.7835 36.3521C36.0083 35.5637 36.058 34.736 35.9328 33.9259Z"
                                            fill={answers.PurchasePurpose === range ? '#FFF' : '#7BD494'}
                                        />
                                    </svg>
                                    ) : (
                                    <svg
                                        width="33"
                                        height="45"
                                        viewBox="0 0 36 41"
                                        fill={answers.PurchasePurpose === range ? '#FFF' : '#7BD494'}
                                                    xmlns="http://www.w3.org/2000/svg">

                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd"
                                            d="M30.5646 5.03967V1.24323C30.5633 1.07805 30.5178 0.916238 30.4329 0.774569C30.348 0.6329 30.2267 0.516539 30.0816 0.437559C29.9365 0.358579 29.773 0.319857 29.6079 0.32541C29.4428 0.330964 29.2822 0.380591 29.1428 0.469142C21.5697 5.20026 19.621 16.5138 19.1338 21.0952C19.108 21.3459 19.1352 21.5992 19.2136 21.8387C19.2921 22.0782 19.4201 22.2985 19.5892 22.4854C19.7583 22.6722 19.9649 22.8214 20.1954 22.9232C20.426 23.025 20.6753 23.0772 20.9274 23.0764L25.5827 23.0836L25.0811 37.6379C25.0677 38.0062 25.1287 38.3734 25.2604 38.7176C25.3921 39.0618 25.5919 39.3759 25.8477 39.6412C26.1036 39.9065 26.4102 40.1175 26.7494 40.2616C27.0886 40.4057 27.4534 40.48 27.8219 40.48C28.1905 40.48 28.5553 40.4057 28.8945 40.2616C29.2337 40.1175 29.5403 39.9065 29.7962 39.6412C30.052 39.3759 30.2517 39.0618 30.3835 38.7176C30.5152 38.3734 30.5762 38.0062 30.5628 37.6379V5.03967H30.5646ZM15.5033 0C15.0248 0 14.5658 0.190105 14.2275 0.528495C13.8891 0.866884 13.699 1.32584 13.699 1.80439V9.31609C13.699 9.42796 13.6755 9.53261 13.6719 9.64268H10.4583V1.80439C10.4583 1.32584 10.2682 0.866884 9.92977 0.528495C9.59138 0.190105 9.13243 0 8.65387 0C8.17532 0 7.71636 0.190105 7.37797 0.528495C7.03958 0.866884 6.84948 1.32584 6.84948 1.80439V9.64268H3.63585C3.63224 9.53261 3.60879 9.42796 3.60879 9.31609V1.80439C3.60879 1.32584 3.41868 0.866884 3.08029 0.528495C2.7419 0.190105 2.28295 0 1.80439 0C1.32584 0 0.866884 0.190105 0.528495 0.528495C0.190105 0.866884 0 1.32584 0 1.80439V9.31609C0 13.9552 2.84553 17.8455 6.65641 18.874L5.913 37.6415C5.90361 38.0074 5.96758 38.3716 6.10115 38.7124C6.23471 39.0533 6.43517 39.364 6.6907 39.6261C6.94622 39.8883 7.25165 40.0967 7.58897 40.2389C7.92629 40.3812 8.28868 40.4545 8.65477 40.4545C9.02087 40.4545 9.38326 40.3812 9.72058 40.2389C10.0579 40.0967 10.3633 39.8883 10.6189 39.6261C10.8744 39.364 11.0748 39.0533 11.2084 38.7124C11.342 38.3716 11.4059 38.0074 11.3966 37.6415L10.6531 18.874C14.4622 17.8455 17.3077 13.9552 17.3077 9.31609V1.80439C17.3077 1.32584 17.1176 0.866884 16.7792 0.528495C16.4409 0.190105 15.9819 0 15.5033 0Z"
                                            fill={answers.PurchasePurpose === range ? '#FFF' : '#7BD494'}
                                        />
                                    </svg>)}
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

export default Subpage2;
