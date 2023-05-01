import './Table.css'

const Table = (props) => {
    const { data } = props;

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th colSpan={3}>Time</th>
                    <th>P</th>
                    <th>J</th>
                    <th>V</th>
                    <th>E</th>
                    <th>D</th>
                    <th>GF</th>
                    <th>GS</th>
                    <th>SG</th>
                </tr>
            </thead>
            <tbody>
                {data.map((obj, index) => (
                    <tr key={obj._id} className={index % 2 === 0 ? 'white-row' : 'gray-row'}>
                        <td>{index + 1}</td>
                        <td><img style={{width: "40px"}} src="https://cdn3.iconfinder.com/data/icons/trophy-and-awards/512/badge_champion_leadership-2-512.png" alt={obj.team.name} /></td>
                        <td>{obj.team.name}</td>
                        <td>{obj.points}</td>
                        <td>{obj.games}</td>
                        <td>{obj.victories}</td>
                        <td>{obj.ties}</td>
                        <td>{obj.defeats}</td>
                        <td>{obj.goalsScored}</td>
                        <td>{obj.goalsConceded}</td>
                        <td>{obj.goalDifference}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table