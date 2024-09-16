import pool from '../../../lib/db';

export async function POST(request: Request) {
    const { title, content, first, last } = await request.json();
    console.log('Request body: ', { title, content, first, last });
    let response = {
        status: 200,
        body: {},
    }

    if (!title || !content || !first || !last) {
      response.status = 400
      response.body = { message: 'Title, content, first, and last are required.' }  
    }

    try {
        const [result] = await pool.query(
          'INSERT INTO blogs (title, content, first_name, last_name) VALUES (?, ?, ?, ?)',
          [title, content, first, last]
        );
        console.log('Result: ', result);
        response.status = 201
        response.body = { id: ('insertId' in result) ? result.insertId : 0, title, content, first, last };
      } catch (error) {
        console.error(error);
        response.status = 500
        response.body = { message: 'Database error' }
    }

    return new Response(JSON.stringify(response.body), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function GET() {
    let response = {
        status: 200,
        body: {},
    }

    try {
        const [blogs] = await pool.query('SELECT * FROM blogs');
        response.body = blogs;
    } catch (error) {
        console.error(error);
        response.status = 500
        response.body = { message: 'Database error' }
    }

    return new Response(JSON.stringify(response.body), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
    });
}

