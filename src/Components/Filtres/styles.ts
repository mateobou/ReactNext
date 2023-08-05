const styles ={
    manyFilters:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row" as 'row',
    },
    filtre: {  
        height: '30px',
        width: 'auto',
        padding: '5px 30px',
        backgroundColor: '#FFF',
        margin: '10px 10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        boxShadow: 'rgba(55, 55, 80, 0.15) 0px 4px 16px 0px',
        color: 'rgb(181, 181, 181)',
        '&:hover': {
            cursor: 'pointer',
        },
        '& p': {
            margin: '0px',
        },
        '&$filtreSelected p': {
            color: 'rgb(44, 165, 141)',
        },
    },
    sousFiltre: {
        height: '20px',
        padding: '5px 10px',
        margin: '10px 10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgb(181, 181, 181)',
        fontSize: '14px',
        borderRadius: '5px',
        '&:hover': {
            cursor: 'pointer',
        },
        '&$sousFiltreSelected p': {
            color: 'rgb(44, 165, 141)',
        },
    },
    filtreSelected: {
        color: 'rgb(44, 165, 141)',
    },
    sousFiltreSelected: {
        color:' rgb(44, 165, 141)',
    },
}
export default styles