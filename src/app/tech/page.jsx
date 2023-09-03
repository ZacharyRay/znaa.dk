import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Tech',
  description: 'Tech jeg kender og bruger til at bygge websites.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tech jeg kender og bruger til at bygge websites."
      intro="Hvis du er interesseret i at vide, hvilke værktøjer jeg bruger til at bygge websites, så check min liste ud. Her er en liste over nogle af de værktøjer, jeg bruger til daglig."
    >
      <div className="space-y-20">
        <ToolsSection title="Kodesprog">
          <Tool title="Javascript">
          Programmeringssprog brugt til at skabe interaktive hjemmesider. Det er en del af den klassiske trio sammen med HTML og CSS til front-end udvikling.
          </Tool>
          <Tool title="HTML">
          Hypertext Markup Language er grundlaget for alle hjemmesider. Det bruges til at strukturere indholdet på hjemmesiden.
          </Tool>
          <Tool title="CSS">
          Cascading Style Sheets styrer layoutet og det visuelle aspekt af en hjemmeside. Det arbejder sammen med HTML.
          </Tool>
          <Tool title="PHP">
          Et server-side scripting sprog, ofte brugt til at bygge dynamiske hjemmesider og applikationer. Det er rygraden i mange CMS som WordPress.
          </Tool>
       
        </ToolsSection>
        <ToolsSection title="Frameworks">
          <Tool title="Vue.js">
          Et progressivt JavaScript-framework, der gør det nemmere at bygge brugergrænseflader.
          </Tool>
          <Tool title="Nuxt.js">
          Et framework bygget på Vue.js, designet til at skabe moderne webapplikationer og tilbyder server-side rendering.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Versionskontrol">
          <Tool title="Git">
          Versionskontrolsystem, der gør det lettere for udviklere at samarbejde og holde styr på ændringer i kodebasen.
          </Tool>
          
        </ToolsSection>
       
        <ToolsSection title="CMS">
          <Tool title="WordPress">
          Et populært open-source CMS, der bruges til at bygge alt fra simple blogs til komplekse websteder.
          </Tool>
          <Tool title="WooCommerce">
          Et WordPress-plugin, der forvandler et WordPress-websted til en webshop.
          </Tool>
          <Tool title="Umbraco">
          Et CMS baseret på Microsofts .NET teknologi. Det er også et open-source CMS, der bruges til at bygge alt fra simple blogs til komplekse websteder.
          </Tool>
          <Tool title="StoryBlok">
          Et headless CMS, der giver dig frihed til at bygge din frontend med enhver teknologi.
          </Tool>
          <Tool title="Decap">
          Et headless CMS, der tilbyder en enkel og intuitiv måde at styre webindhold på.
          </Tool>
          <Tool title="Strapi">
          Et open-source headless CMS bygget med Node.js, det tilbyder stor fleksibilitet og er meget skalerbart.
          </Tool>
        </ToolsSection>
        <ToolsSection title="IDE">
          <Tool title="VS Code">
          En kode-editor udviklet af Microsoft. Det er en af de mest populære kode-editors, der bruges af udviklere i dag.
          </Tool>
          <Tool title="Github Copilot">
          En AI-drevet kodeassistent, der hjælper med at skrive ny kode og forstå eksisterende kode hurtigere.
          </Tool>
        
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
