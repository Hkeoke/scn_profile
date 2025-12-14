import { cn } from '@/lib/utils';

export default function FlutterIcon({ className }: { className?: string }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 317"
      className={cn('w-6 h-6', className)}
    >
      <defs>
        <linearGradient
          id="flutterGradient"
          gradientUnits="userSpaceOnUse"
          x1="-173.6875"
          y1="548.7979"
          x2="-172.968"
          y2="548.5386"
          gradientTransform="matrix(44.5891 0 0 -44.5901 7866.5254 24720.502)"
        >
          <stop offset="0" stopColor="#000000" />
          <stop offset="1" stopColor="#000000" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g>
        <polygon fill="#47C5FB" points="157.67,0 0,157.67 48.8,206.47 255.27,0" />
        <polygon
          fill="#47C5FB"
          points="156.57,145.4 72.15,229.82 121.13,279.53 169.84,230.82 255.27,145.4"
        />
        <polygon
          fill="#00569E"
          points="121.13,279.53 158.21,316.61 255.27,316.61 169.84,230.82"
        />
        <polygon
          fill="#00B5F8"
          points="71.6,230.36 120.4,181.56 169.84,230.82 121.13,279.53"
        />
        <polygon
          fill="url(#flutterGradient)"
          fillOpacity="0.8"
          points="121.13,279.53 161.69,266.07 165.72,234.94"
        />
      </g>
    </svg>
  );
}
