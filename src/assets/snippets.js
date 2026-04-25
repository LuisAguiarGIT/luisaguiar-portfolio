const snippets = [
  {
    language: 'typescript',
    filename: 'HelloWorld.tsx',
    code: `interface IGreetingProps {
  greeting: string;
  person: string;
}

export default function GreetUser ({greeting, person} : IGreetingProps) {
    const fullGreeting = \`\${greeting}, \${person}\`;
    return <h1>{fullGreeting}</h1>;
}`,
  },
  {
    language: 'csharp',
    filename: 'UserService.cs',
    code: `public async Task<User?> GetUserById(Guid id)
{
    return await _context.Users
        .Include(u => u.Profile)
        .FirstOrDefaultAsync(u => u.Id == id);
} `,
  },
];

export default snippets;
