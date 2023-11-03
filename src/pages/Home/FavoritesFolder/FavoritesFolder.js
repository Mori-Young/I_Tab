import { useDispatch } from '@umijs/max';
import { Dropdown } from 'antd';
import style from './style.less';


export default function FavoritesFolder() {
  const dispatch = useDispatch();
  const addSite = (e) => {
    dispatch({ type: 'home/save', config: { editVisible: true } })
  }

  const editFolder = (e) => {
    console.log(e);
  }

  const items = [
    {
      label: <div onClick={addSite}>添加网址</div>,
      key: 'addSite'
    },
    {
      label: <div onClick={editFolder}>编辑收藏夹</div>,
      key: 'editFolder'
    },
  ];

  return (
    <>
      <Dropdown menu={{
        items,
      }} trigger={['contextMenu']} >
        <div className={style.folderBox}>FavoritesFolder</div>
      </Dropdown >
    </>
  )
}
