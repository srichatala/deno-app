import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Actor() {
  const [actors, setActors] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/v1/actors/`);
      const data = await response.json() as any[];
      setActors(data);
    })();
  }, []);

  return (
    <main>
        <h1>Actors</h1>
        <table>   
            <th>Actor Id</th>
            <th>First Name</th> 
            <th>Last Name</th> 
            <th>Last Updated Date</th> 
        {actors.map((actor: any) => {
            return (
                <tr>
                    <td>{actor.actorId}</td>
                    <td>{actor.firstName}</td>
                    <td>{actor.lastName}</td>
                    <td>{actor.lastUpdate}</td>
                </tr>
            );
        })}
        </table>
    </main>
  );
}