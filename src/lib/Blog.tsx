import { useEffect, useState } from 'react';
import { Client, Databases, DocumentList, Document } from 'appwrite';

function dataBlog() {
    const [documents, setDocuments] = useState<Document[]>([]);

    useEffect(() => {
        const client = new Client();
        const databases = new Databases(client);

        client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('659fc6f47df631631aa8');

        databases.listDocuments('659fc75f622537757aa5', '659fc776496ba7f003ee')
            .then(function (response) {
                setDocuments(response.documents);
            })
            .catch(function (error) {
                console.log(error); // Failure
            });
    }, []);

    return (
        <ul>
            {documents.map((document: Document) => (
                <div key={document.$id}>
                    <h2>{document.title}</h2>
                    <div>
                        <p>{ document.content }</p>
                        <img src="" alt="" />
                    </div>
                    <p>{document.author}</p>
                </div>
            ))}
        </ul>
    );
}

export default dataBlog;
