import style from './ListOfTasks.module.css'

export const ListOfTasks=(props:any)=> {
    return (
        <div className={style.list__wrapper}>
            <h3>Title</h3>
            <div>
                wrapper list
                <ul>
                    <li>1task</li>
                    <li>2task</li>
                    <li>3task</li>
                    <li>4task</li>
                    <li>4task</li>
                    <li>4task</li>
                    <li>4task</li>
                    <li>4task</li>
                    <li>4task</li>
                    <li>4task</li>
                    <li>4task</li>
                    <li>4task</li>
                </ul>
            </div>
        </div>
    )
}