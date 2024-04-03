enum TriState {
    True,
    False,
    Unsure,
}

type StreamSkipperConfiguration = {
    skipIntroByDefault: TriState;
    skipOutroByDefault: TriState;
    skipResumeByDefault: TriState;

    Netflix: {
        skipIntro: TriState;
        skipOutro: TriState;
        skipResume: TriState;

        exceptions: ExceptionConfiguration[];
    };
};

type ExceptionConfiguration = {
    id: string;
    title?: string;
    skipIntro: TriState;
    skipOutro: TriState;
    skipResume: TriState;
};
