import { useState, useEffect } from 'react';

import { CSVLink } from 'react-csv';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { useMenu } from 'hooks/common';

import { getData } from 'api';
import { TableLoader } from 'components';
import { StyledButton, StyledButtonContainer, StyledPaper } from 'pages/CSV/styles';
import { ReturnType } from 'pages/CSV/types';

import { MENU_CONFIG } from 'configs/menu';

const headKr = ['아이디', '이름', '유저 이름', '이메일', '주소', '핸드폰', '웹 사이트', '회사'];

const url = 'https://jsonplaceholder.typicode.com/users/';

export default function CSVTable() {
    useMenu(MENU_CONFIG.csv);

    const [datas, setDatas] = useState<ReturnType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown | null>(null);

    const handleData = async () => {
        try {
            setError(null);
            setDatas([]);
            setLoading(true);

            const result = await getData<ReturnType[]>(url);
            setDatas(result);
        } catch (error) {
            setError(error);
        }

        setLoading(false);
    };

    useEffect(() => {
        handleData();
    }, []);

    // function
    const arrayOfArrays = () => {
        return [
            headKr,
            ...datas.map((_, i) => {
                return Object.values(datas[i]);
            })
        ];
        // 배열에 데이터가 빠져있을 경우
        // return [["firstname", "lastname", "email"], ["ah@smthing.co.com"], ["Labes"], ["Yezzi", "ymin@cocococo.com"]];
    };

    const headDatas = datas.length > 0 ? Object.keys(datas[0]) : [];
    const headerToKr = () =>
        datas.length > 0 ? headDatas.map((key: string, index: number) => ({ label: headKr[index], key })) : [];

    // literal object에 문제가 있을 경우
    // const testData = [{ firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" }, { firstname: "Raed", email: "rl@smthing.co.com" }, { email: "ymin@cocococo.com" }];
    // const testData = [{ firstname: "Ahmed", email: "ah@smthing.co.com" }, { firstname: "Raed", email: "rl@smthing.co.com" }, { email: "ymin@cocococo.com" }];

    return (
        <StyledPaper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headKr.map((data) => (
                                <TableCell key={data}>{data}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableLoader />
                        ) : error ? (
                            <TableLoader type="empty" text="조회된 데이터가 없습니다." />
                        ) : (
                            datas?.map((data, index) => (
                                <TableRow key={index} hover>
                                    <TableCell>{data.id}</TableCell>
                                    <TableCell>{data.name}</TableCell>
                                    <TableCell>{data.username}</TableCell>
                                    <TableCell>{data.email}</TableCell>
                                    <TableCell>{data.address.street}</TableCell>
                                    <TableCell>{data.phone}</TableCell>
                                    <TableCell>{data.website}</TableCell>
                                    <TableCell>{data.company.name}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <StyledButtonContainer>
                <StyledButton>
                    <CSVLink filename={`${new Date().getTime()}.csv`} data={arrayOfArrays()}>
                        Array
                    </CSVLink>
                </StyledButton>
                <StyledButton>
                    <CSVLink filename={`${new Date().getTime()}.csv`} data={datas}>
                        Literal Objects
                    </CSVLink>
                </StyledButton>
                <StyledButton>
                    <CSVLink filename={`${new Date().getTime()}.csv`} data={datas} headers={headerToKr()}>
                        Download me
                    </CSVLink>
                </StyledButton>
            </StyledButtonContainer>
        </StyledPaper>
    );
}
