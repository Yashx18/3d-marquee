import { TemplateComponent } from '@/components/ui/TemplateComponent';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className={cn('bg-tailwind-100 min-h-screen overflow-hidden font-sans text-black')}>
      <main
        className={cn(
          'bg-tailwind-100 border-lines-100 mx-auto flex min-h-screen max-w-[1360px] items-center border-x',
          // Gradients
          'bg-[repeating-linear-gradient(135deg,_rgba(28,31,41,1)_0px,_rgba(28,31,41,1)_1px,_transparent_1px,_transparent_8px)]'
        )}
      >
        <div
          className={cn(
            'bg-tailwind-100 mx-auto flex min-h-screen w-full max-w-7xl items-center border-x border-[rgba(28,31,41,1)]'
          )}
        >
          <TemplateComponent />
        </div>
      </main>
    </div>
  );
}
