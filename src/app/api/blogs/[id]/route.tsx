// pages/api/blogs/[id]/index.ts
import pool from '../../../../lib/db';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    
    let response = {
        status: 200,
        body: {},
    };

    if (!id) {
        response.status = 400;
        response.body = { message: 'ID is required.' };
        return new Response(JSON.stringify(response.body), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const [blogs] = await pool.query('SELECT * FROM blogs WHERE id = ?', [id]);
        
        if (blogs.length === 0) {
            response.status = 404;
            response.body = { message: 'Blog not found' };
        } else {
            response.body = blogs[0];
        }
    } catch (error) {
        console.error(error);
        response.status = 500;
        response.body = { message: 'Database error' };
    }

    return new Response(JSON.stringify(response.body), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    
    let response = {
        status: 200,
        body: {},
    };

    if (!id) {
        response.status = 400;
        response.body = { message: 'ID is required.' };
        return new Response(JSON.stringify(response.body), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const [result] = await pool.query('DELETE FROM blogs WHERE id = ?', [id]);
        
        if (result.affectedRows === 0) {
            response.status = 404;
            response.body = { message: 'Blog not found' };
        } else {
            response.body = { message: 'Blog deleted' };
        }
    } catch (error) {
        console.error(error);
        response.status = 500;
        response.body = { message: 'Database error' };
    }

    return new Response(JSON.stringify(response.body), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
    });
}
