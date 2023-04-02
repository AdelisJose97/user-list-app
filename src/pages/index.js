import styles from '@/styles/Home.module.css';
import useFetch from '@/hooks/useFecth';
import BaseTable, { Column } from 'react-base-table';
import 'react-base-table/styles.css';
import { columnsHead } from '@/utils/columnsHead';
import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import UserDetailCard from '@/components/UserDetailCard';

export default function Home() {
  const { users, setPaginationOptions } = useFetch(
    'https://dummyjson.com/users'
  );
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [userSelected, setUserSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setUserSelected(null);
    setSelectedUserIndex(null);
  };

  useEffect(() => {
    setUserSelected(users[selectedUserIndex]);
  }, [selectedUserIndex]);

  const handleChange = (event, value) => {
    setPaginationOptions((prevValues) => ({
      ...prevValues,
      skip: (value - 1) * 10,
    }));
  };

  return (
    <>
      <main className={styles.main}>
        <BaseTable data={users} width={600} height={600}>
          {columnsHead.map((column) => {
            const { key, dataKey, title } = column;
            return (
              <Column
                title={title}
                key={key}
                dataKey={dataKey}
                width={120}
                cellRenderer={({ cellData, rowIndex }) => {
                  return (
                    <div
                      className="text-black w-full h-full flex items-center justify-center"
                      onClick={() => {
                        setSelectedUserIndex(rowIndex);
                        handleOpen();
                      }}
                    >
                      {cellData}
                    </div>
                  );
                }}
              />
            );
          })}
        </BaseTable>
        <div className="mt-10">
          <Pagination
            count={10}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </div>
        <Modal open={open} onClose={handleClose}>
          <UserDetailCard user={userSelected} />
        </Modal>
      </main>
    </>
  );
}
