const snippets = [
  {
    language: 'typescript',
    filename: 'HelloWorld.tsx',
    code: `interface IGreetingProps {
  greeting: string;
  person: string;
}
export default function GreetUser (
{ greeting, 
person } : IGreetingProps
) {
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
  {
    language: 'sql',
    filename: 'GetAllWorkouts.sql',
    code: `USE myFitness
    
SELECT w.name, e.name, s.reps, s.weight
FROM workout w
INNER JOIN exercises e ON
w.id = e.workoutId
INNER JOIN sets s ON
e.id = s.exerciseId
    `,
  },
];

export default snippets;
