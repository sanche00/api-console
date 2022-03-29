import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getSign }   from '../utils/securty-util.js';
import { json } from 'stream/consumers';

const Users = () => {
    const [users, setUsers] = useState<Array<any>>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 users 를 초기화하고
          setError(null);
          setUsers([]);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          var signData = getSign('/FOAY7mEAxAY9Ub1LHwPhXyuMJRGPV3I/8ZXc/Tpyzg=');
          console.log(signData);
          let config = {
            headers: {
                'x-user-id': 'sellpick',
                'x-request-id': signData.reqReq,
                'x-timestamp': signData.time,
                'x-signature': signData.sign,
                cmnyCd: 'sebang',
            }
          };
          const response = await axios.get(
            'https://api.ssgsellpick.com/api/sales/orders?collectDate=20220321&inPrivacy=true',
            config);
        
          setUsers(response.data.data); // 데이터는 response.data 안에 들어있습니다.
        } catch ( e) {
            console.log(e);
          //setError(e);
        }
        setLoading(false);
      };
  
      fetchUsers();
    }, []);
  
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (users.length != 0) return <div>{JSON.stringify(users)}</div>;
    console.log(users);
    // return (
    //   <div>{users}</div>
    // );
    return <div></div>;
  }
export default Users;