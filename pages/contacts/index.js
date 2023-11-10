import Link from "next/link";
import contacts from "../api/contacts";
import Layout from "../../components/Layout";

export default function Contacts() {
  return (
    <Layout>
      <ul>
        {contacts.map((contact) => {
          return (
            <li>
              <Link legacyBehavior href={`contacts/${contact.id}`}>
                <a>{contact.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
