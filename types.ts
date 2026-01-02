
export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
