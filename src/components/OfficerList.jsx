import OfficerProfile from "./OfficerProfile";

export default function OfficerList({ officers }) {
  return (
    <ul>
      {officers.map((officer) => (
        <li key={officer.id}>
          <OfficerProfile officer={officer} />
        </li>
      ))}
    </ul>
  );
}
