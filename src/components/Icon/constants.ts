import { Apple } from './Apple';
import { Briefcase } from './Briefcase';
import { ChartColumn } from './ChartColumn';
import { ChevronLeft } from './ChevronLeft';
import { ChevronRight } from './ChevronRight';
import { Eye } from './Eye';
import { EyeSlash } from './EyeSlash';
import { File } from './File';
import { Gear } from './Gear';
import { Google } from './Google';
import { Home } from './Home';
import { InboxFilled } from './InboxFilled';
import { Plus } from './Plus';
import { Receipt } from './Receipt';
import { Search } from './Search';
import { Shield } from './Shield';
import { Wallet } from './Wallet';

export const icon = {
  apple: Apple,
  briefcase: Briefcase,
  chartColumn: ChartColumn,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  eye: Eye,
  eyeSlash: EyeSlash,
  file: File,
  gear: Gear,
  google: Google,
  home: Home,
  inboxFilled: InboxFilled,
  plus: Plus,
  receipt: Receipt,
  search: Search,
  shield: Shield,
  wallet: Wallet,
};

export type IconName = keyof typeof icon;
