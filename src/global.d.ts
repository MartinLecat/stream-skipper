enum TriState {
    True,
    False,
    Unsure,
}

type ExceptionConfiguration = {
    id: string;
    title?: string;
    skipIntro: TriState;
    skipOutro: TriState;
    skipResume: TriState;
};
type PlatformConfiguration = {
    skipIntro: TriState;
    skipOutro: TriState;
    skipResume: TriState;

    exceptions: ExceptionConfiguration[];
};
type StreamSkipperConfiguration = {
    Netflix: PlatformConfiguration;
    PrimeVideo: PlatformConfiguration;
    DisneyPlus: PlatformConfiguration;
};
