const List = ( props ) => {

    let counter = 1;

    return (
        <div className='col'>
        <h4>Meble {props.value && props.value}</h4>
        <ul className='list-group'>
            {props.records && <li className='list-group-item' key={props.id}>
                <div className='row justify-content-start'>
                    <div className='col-1'>
                        LP. 
                    </div>
                    <div className='col'>
                        Nazwa 
                    </div>
                    <div className='col-1'>
                        Wersja 
                    </div>
                    <div className='col-1'>
                         
                    </div>
                    <div className='col'>
                        Kod Produktu 
                    </div>
                    <div className='col-2'>
                        Cena brutto 
                    </div>
                </div>
                </li>}
            {props.records && props.records.map(item => 
            <li className='list-group-item' onClick={()=> props.onClickList(item.id)} key={item.id}>
                <div className='row justify-content-start'>
                    <div className='col-1'>
                        {counter++}. 
                    </div>
                    <div className='col'>
                        {item.name} 
                    </div>
                    <div className='col-1'>
                        {item.version && item.version} 
                    </div>
                    <div className='col-1'>
                        {item.lockType && item.lockType} 
                    </div>
                    <div className='col'>
                        {item.code} 
                    </div>
                    <div className='col-2'>
                        {item.price}
                    </div>
                </div>
            </li>)}
        </ul>
        </div>
    )
}

export default List
