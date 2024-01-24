import { KeyboardTypeOptions } from 'react-native';

export interface inputProps {
    label: string;
    placeHolder: string;
    autoCap?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
    keybType?: KeyboardTypeOptions;
    onChange: (event: any) => void;
}